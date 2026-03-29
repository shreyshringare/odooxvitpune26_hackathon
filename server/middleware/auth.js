import { supabase } from '../lib/auth.js';
import { db } from '../db/index.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];

    // Verify token with Supabase and retrieve the user
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    // Query the Prisma DB to find our corresponding User record
    const dbUser = await db.user.findUnique({
      where: { email: user.email },
      select: {
        id: true,
        role: true,
        company_id: true,
      },
    });

    if (!dbUser) {
      return res.status(401).json({ error: 'User does not exist in the database.' });
    }

    // Attach the exact required shape to req.user
    req.user = {
      id: dbUser.id,
      role: dbUser.role,
      company_id: dbUser.company_id,
    };

    next();
  } catch (error) {
    console.error('Authentication middleware error:', error);
    return res.status(401).json({ error: 'Unauthorized access' });
  }
};
