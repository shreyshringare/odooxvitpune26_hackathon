import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Approvals from './pages/Approvals';
import Login from './pages/Login';
import Users from './pages/Users';
import Placeholder from './pages/Placeholder';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import HelpCenter from './pages/HelpCenter';
import Insights from './pages/Insights';
import SecurityPolicy from './pages/SecurityPolicy';
import SystemStatus from './pages/SystemStatus';

/**
 * Wraps protected routes — redirects to /login if not authenticated.
 * For hackathon: allows access even without auth token so the app is usable
 * before backend is running. Once logged in, the token persists.
 */
const Protected = ({ children }) => {
  // For now, always allow access (backend has no auth on expense routes).
  // When auth is fully wired, uncomment the guard below:
  // const { token } = useAuth();
  // if (!token) return <Navigate to="/login" replace />;
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route path="/" element={<Protected><Dashboard /></Protected>} />
      <Route path="/approvals" element={<Protected><Approvals /></Protected>} />
      <Route path="/users" element={<Protected><Users /></Protected>} />
      <Route path="/placeholder" element={<Protected><Placeholder /></Protected>} />
      <Route path="/profile" element={<Protected><Profile /></Protected>} />
      <Route path="/settings" element={<Protected><Settings /></Protected>} />
      <Route path="/notifications" element={<Protected><Notifications /></Protected>} />
      <Route path="/help" element={<Protected><HelpCenter /></Protected>} />
      <Route path="/insights" element={<Protected><Insights /></Protected>} />

      {/* Footer Links */}
      <Route path="/security" element={<Protected><SecurityPolicy /></Protected>} />
      <Route path="/compliance" element={<Protected><Placeholder title="Compliance API Documentation" /></Protected>} />
      <Route path="/status" element={<Protected><SystemStatus /></Protected>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
