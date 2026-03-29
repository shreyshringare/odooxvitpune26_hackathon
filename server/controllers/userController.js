import { userService } from '../services/userService.js';

export const userController = {
  async getAllUsers(req, res) {
    try {
      const { company_id } = req.user;
      const users = await userService.getAll(company_id);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch users', details: err.message });
    }
  },

  async createUser(req, res) {
    try {
      const { name, email, role, manager_id } = req.body;
      const { company_id } = req.user;
      
      if (!name || !email || !role) {
        return res.status(400).json({ error: 'Name, email, and role are required' });
      }

      const { user, tempPassword } = await userService.create({
        name,
        email,
        role,
        manager_id,
        company_id
      });

      res.status(201).json({ user, tempPassword });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create user', details: err.message });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      
      const updatedUser = await userService.update(id, updateData);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update user', details: err.message });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deletedUser = await userService.delete(id);
      res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete user', details: err.message });
    }
  }
};
