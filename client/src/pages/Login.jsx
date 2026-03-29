import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ 
    name: '',
    email: '', 
    password: '',
    country: 'US'
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { loginUser, signupUser, loginWithGoogle, loading } = useAuth();
  
  // Custom local loading state for signup redirect
  const [localLoading, setLocalLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLocalLoading(true);
    try {
      if (isLogin) {
        await loginUser(formData.email, formData.password);
        navigate('/');
      } else {
        await signupUser({
          name: formData.name || formData.email.split('@')[0],
          email: formData.email,
          password: formData.password,
          country: formData.country,
        });
        // After successful signup, log them in automatically
        await loginUser(formData.email, formData.password);
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || err.message || 'Authentication failed');
    } finally {
      setLocalLoading(false);
    }
  };

  const isProcessing = loading || localLoading;

  return (
    <div className="min-h-screen bg-[#faf1f4] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#714B67] text-white font-black text-2xl mb-5 shadow-xl shadow-[#714B67]/30">
            XF
          </div>
          <h1 className="text-3xl font-black text-[#714B67] tracking-tight">XpenseFlow</h1>
          <p className="text-sm text-slate-500 font-medium mt-1 uppercase tracking-[0.2em]">Enterprise Edition</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(113,75,103,0.10)] p-8">
          <h2 className="text-xl font-black text-slate-800 mb-1">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="text-sm text-slate-400 mb-8">
            {isLogin 
              ? 'Sign in to your account to continue.'
              : 'Sign up to manage your enterprise expenses.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name - Only for Signup */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-black text-[#4e444a] uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">person</span>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    placeholder="Alex Rivera"
                    className="w-full pl-11 pr-4 py-3.5 bg-[#faf1f4] border border-[#e9e0e3] rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#714B67]/20 focus:border-[#714B67] transition-all"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-black text-[#4e444a] uppercase tracking-wider">Work Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">mail</span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#faf1f4] border border-[#e9e0e3] rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#714B67]/20 focus:border-[#714B67] transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-black text-[#4e444a] uppercase tracking-wider">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs font-bold text-[#714B67] hover:underline">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 bg-[#faf1f4] border border-[#e9e0e3] rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#714B67]/20 focus:border-[#714B67] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(p => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#714B67] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 bg-[#714B67] text-white font-black rounded-xl shadow-lg shadow-[#714B67]/25 hover:brightness-110 active:scale-[0.98] transition-all text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isProcessing 
                ? (isLogin ? 'Signing in…' : 'Creating account…') 
                : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>

          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center text-sm text-slate-500 font-medium">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-[#714B67] font-bold hover:underline"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#e9e0e3]"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-[#e9e0e3]"></div>
          </div>

          {/* SSO — Google OAuth via Supabase */}
          <button
            type="button"
            onClick={async () => {
              try {
                await loginWithGoogle();
              } catch (err) {
                setError(err.message || 'Google sign-in failed');
              }
            }}
            className="w-full py-3.5 border-2 border-[#e9e0e3] text-slate-700 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#faf1f4] transition-colors text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="text-center text-[11px] text-slate-400 mt-8 font-medium">
          © 2026 XpenseFlow Enterprise Solutions
        </p>
      </div>
    </div>
  );
};

export default Login;
