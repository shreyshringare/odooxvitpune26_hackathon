import express from 'express';
import { userController } from '../controllers/userController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   GET /api/users
 * @desc    Get all users for the current company (ADMIN only)
 * @access  Private/Admin
 */
router.get('/', authenticate, (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Access denied. ADMIN role required.' });
  }
  userController.getAllUsers(req, res, next);
});

/**
 * @route   POST /api/users
 * @desc    Create a new user (ADMIN/MANAGER can create)
 * @access  Private
 */
router.post('/', authenticate, (req, res, next) => {
  if (req.user.role !== 'ADMIN' && req.user.role !== 'MANAGER') {
    return res.status(403).json({ error: 'Access denied.' });
  }
  userController.createUser(req, res, next);
});

/**
 * @route   PUT /api/users/:id
 * @desc    Update a user
 * @access  Private
 */
router.put('/:id', authenticate, userController.updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Soft delete a user
 * @access  Private
 */
router.delete('/:id', authenticate, userController.deleteUser);

export default router;
