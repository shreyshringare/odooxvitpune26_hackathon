/**
 * XpenseFlow — Centralized HTTP Client
 * Connects to the Express backend at localhost:3000
 */
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
});

// ── Auth Interceptor ─────────────────────────────────────────────────────────
// Automatically attaches the JWT token from localStorage to every request.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('xf_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Response error interceptor ───────────────────────────────────────────────
// On 401, clear stored credentials and redirect to login.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only redirect if we're not already on the login page
      if (!window.location.pathname.includes('/login')) {
        localStorage.removeItem('xf_token');
        localStorage.removeItem('xf_user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
