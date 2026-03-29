import express from 'express';
import { approvalRuleController } from '../controllers/approvalRuleController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   GET /api/approval-rules
 * @desc    Get all approval rules for current company
 * @access  Private/Admin/Manager
 */
router.get('/', authenticate, (req, res, next) => {
  if (req.user.role !== 'ADMIN' && req.user.role !== 'MANAGER') {
    return res.status(403).json({ error: 'Access denied.' });
  }
  approvalRuleController.getAllRules(req, res, next);
});

/**
 * @route   POST /api/approval-rules
 * @desc    Create a new approval rule
 * @access  Private/Admin
 */
router.post('/', authenticate, (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Access denied. ADMIN role required.' });
  }
  approvalRuleController.createRule(req, res, next);
});

/**
 * @route   PUT /api/approval-rules/:id
 * @desc    Update an approval rule
 * @access  Private/Admin
 */
router.put('/:id', authenticate, (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Access denied. ADMIN role required.' });
  }
  approvalRuleController.updateRule(req, res, next);
});

/**
 * @route   DELETE /api/approval-rules/:id
 * @desc    Soft delete an approval rule
 * @access  Private/Admin
 */
router.delete('/:id', authenticate, (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Access denied. ADMIN role required.' });
  }
  approvalRuleController.deleteRule(req, res, next);
});

export default router;
