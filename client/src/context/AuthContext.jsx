import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser as loginApi, googleLoginApi } from '../services/userApi';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('xf_token') || null);
  const [loading, setLoading] = useState(true); // start true to check session

  // On mount: check localStorage AND listen for Supabase OAuth callback
  useEffect(() => {
    // 1. Restore from localStorage
    const savedUser = localStorage.getItem('xf_user');
    if (savedUser && token) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('xf_user');
        localStorage.removeItem('xf_token');
      }
    }

    // 2. Listen for Supabase auth state changes (handles OAuth redirect)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          try {
            // Call the backend to verify token AND auto-create User/Company in Prisma
            const data = await googleLoginApi(session.access_token);

            const authUser = {
              id: data.user.id,
              email: data.user.email,
              name: data.user.name || session.user?.user_metadata?.full_name || 'User',
              avatar: data.user.avatar || session.user?.user_metadata?.avatar_url || null,
              role: data.user.role || 'EMPLOYEE',
              company_id: data.user.company_id,
            };

            setToken(data.token);
            setUser(authUser);
            localStorage.setItem('xf_token', data.token);
            localStorage.setItem('xf_user', JSON.stringify(authUser));
          } catch (err) {
            console.error('Failed to sync Google user with backend:', err);
            // Fallback: use Supabase session data directly
            const supaUser = session.user;
            const authUser = {
              id: supaUser.id,
              email: supaUser.email,
              name: supaUser.user_metadata?.full_name || supaUser.email?.split('@')[0] || 'User',
              avatar: supaUser.user_metadata?.avatar_url || null,
              role: 'EMPLOYEE',
            };

            setToken(session.access_token);
            setUser(authUser);
            localStorage.setItem('xf_token', session.access_token);
            localStorage.setItem('xf_user', JSON.stringify(authUser));
          }
        }
      }
    );

    setLoading(false);

    return () => subscription.unsubscribe();
  }, []);

  /**
   * Email/Password Login — calls POST /api/auth/login
   */
  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const data = await loginApi(email, password);
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('xf_token', data.token);
      localStorage.setItem('xf_user', JSON.stringify(data.user));
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Email/Password Signup — calls POST /api/auth/signup
   */
  const signupUser = async ({ name, email, password, country }) => {
    setLoading(true);
    try {
      const { signupUser: signupApi } = await import('../services/userApi');
      const data = await signupApi({ name, email, password, country });
      // Depending on if signup logs them in automatically or not, 
      // but usually we can just log them in after.
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  /**
   * Google OAuth — redirects to Google via Supabase
   */
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/',
      },
    });
    if (error) {
      throw error;
    }
    // After redirect, onAuthStateChange above handles the session
  };

  const logoutUser = async () => {
    await supabase.auth.signOut().catch(() => {});
    setUser(null);
    setToken(null);
    localStorage.removeItem('xf_token');
    localStorage.removeItem('xf_user');
  };

  const updateUser = (updatedFields) => {
    setUser(prev => {
      const merged = { ...prev, ...updatedFields };
      localStorage.setItem('xf_user', JSON.stringify(merged));
      return merged;
    });
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, loginUser, signupUser, loginWithGoogle, logoutUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
