import { supabase } from '../lib/auth.js';
import { db } from '../db/index.js';

/**
 * Google OAuth Login — called after Supabase OAuth redirect.
 * Verifies the Supabase session token and ensures the user exists in Prisma DB.
 * If the user doesn't exist, auto-provisions a Company + User record.
 */
export const googleLogin = async (req, res) => {
  const { access_token } = req.body;

  if (!access_token) {
    return res.status(400).json({ error: 'access_token is required.' });
  }

  try {
    // Step 1: Verify the token with Supabase and get the user
    const { data: { user: supaUser }, error: authError } = await supabase.auth.getUser(access_token);

    if (authError || !supaUser) {
      return res.status(401).json({ error: 'Invalid or expired Google OAuth token.' });
    }

    const email = supaUser.email;
    const name = supaUser.user_metadata?.full_name || supaUser.user_metadata?.name || email?.split('@')[0] || 'User';
    const avatar = supaUser.user_metadata?.avatar_url || null;

    // Step 2: Check if user already exists in Prisma DB
    let dbUser = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        role: true,
        company_id: true,
        name: true,
      },
    });

    // Step 3: If user doesn't exist, auto-provision Company + User
    if (!dbUser) {
      const result = await db.$transaction(async (prisma) => {
        const company = await prisma.company.create({
          data: {
            name: `${name}'s Company`,
            country: 'India',
            base_currency: 'INR',
          },
        });

        const user = await prisma.user.create({
          data: {
            id: supaUser.id,
            company_id: company.id,
            name: name,
            email: email,
            role: 'ADMIN',
          },
        });

        return { company, user };
      });

      dbUser = {
        id: result.user.id,
        role: result.user.role,
        company_id: result.user.company_id,
        name: result.user.name,
      };
    }

    // Step 4: Return token + user in same shape as email/password login
    return res.status(200).json({
      token: access_token,
      user: {
        id: dbUser.id,
        role: dbUser.role,
        company_id: dbUser.company_id,
        name: dbUser.name,
        email: email,
        avatar: avatar,
      },
    });

  } catch (error) {
    console.error('Google login error:', error);
    return res.status(500).json({ error: 'Internal server error during Google login.' });
  }
};

const getBaseCurrency = (country) => {
  if (!country) return 'USD';
  
  const map = {
    'India': 'INR',
    'US': 'USD',
    'USA': 'USD',
    'UK': 'GBP',
    'EU': 'EUR'
  };
  
  return map[country] || 'USD';
};

export const signup = async (req, res) => {
  const { name, email, password, country } = req.body;

  if (!name || !email || !password || !country) {
    return res.status(400).json({ error: 'Missing required fields (name, email, password, country).' });
  }

  try {
    // Step A: Sign up user using Supabase Native Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      return res.status(400).json({ error: authError.message });
    }

    if (!authData.user) {
      return res.status(400).json({ error: 'Failed to create user in Supabase auth system.' });
    }

    // Step B: Derive base_currency from the provided country
    const base_currency = getBaseCurrency(country);

    // Step C: Prisma db transaction to create Company AND User
    const result = await db.$transaction(async (prisma) => {
      const company = await prisma.company.create({
        data: {
          name: `${name}'s Company`,
          country: country,
          base_currency: base_currency,
        },
      });

      const user = await prisma.user.create({
        data: {
          id: authData.user.id,
          company_id: company.id,
          name: name,
          email: email,
          role: 'ADMIN',
        },
      });

      return { company, user };
    });

    return res.status(201).json({
      message: 'Signup successful!',
      user: result.user,
      company: result.company,
      session: authData.session,
    });

  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Internal server error during signup.' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      return res.status(401).json({ error: authError.message });
    }

    if (!authData.session || !authData.user) {
       return res.status(401).json({ error: 'Failed to retrieve session from Supabase.' });
    }

    // Fetch the user's role and company_id
    const dbUser = await db.user.findUnique({
      where: { email },
      select: {
        id: true,
        role: true,
        company_id: true,
      },
    });

    if (!dbUser) {
      return res.status(404).json({ error: 'User record not found in internal system database.' });
    }

    return res.status(200).json({
      token: authData.session.access_token,
      user: dbUser,
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error during login processes.' });
  }
};
