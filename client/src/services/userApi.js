/**
 * XpenseFlow — Auth Service Layer
 * Mapped to the real Express backend at /api/auth
 */
import api from './api';

/** POST /api/auth/login */
export const loginUser = async (email, password) => {
  const { data } = await api.post('/auth/login', { email, password });
  return data; // { token, user: { id, role, company_id } }
};

/** POST /api/auth/signup */
export const signupUser = async ({ name, email, password, country }) => {
  const { data } = await api.post('/auth/signup', { name, email, password, country });
  return data; // { message, user, company, session }
};

/** POST /api/auth/google — sync Google OAuth user with Prisma DB */
export const googleLoginApi = async (access_token) => {
  const { data } = await api.post('/auth/google', { access_token });
  return data; // { token, user: { id, role, company_id, name, email, avatar } }
};

/** GET /api/users — list all users for the company (ADMIN only) */
export const listUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

/** POST /api/users — create a new user */
export const createUser = async (userData) => {
  const { data } = await api.post('/users', userData);
  return data;
};

/** PUT /api/users/:id — update a user */
export const updateUserRole = async (id, role) => {
  const { data } = await api.put(`/users/${id}`, { role });
  return data;
};

/** DELETE /api/users/:id — delete a user */
export const deleteUser = async (id) => {
  const { data } = await api.delete(`/users/${id}`);
  return data;
};
