import { approvalService } from '../services/approvalService.js';

export const approvalRuleController = {
  async getAllRules(req, res) {
    try {
      const { company_id } = req.user;
      const rules = await approvalService.getAll(company_id);
      res.status(200).json(rules);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch rules', details: err.message });
    }
  },

  async createRule(req, res) {
    try {
      const { 
        description, 
        rule_type, 
        is_manager_approver, 
        approval_percentage, 
        approvers 
      } = req.body;
      const { company_id } = req.user;

      if (!description || !rule_type) {
        return res.status(400).json({ error: 'Description and rule_type are required' });
      }

      const ruleData = {
        description,
        rule_type,
        is_manager_approver: !!is_manager_approver,
        is_sequential: rule_type === 'SEQUENTIAL',
        approval_percentage: approval_percentage || null,
        company_id
      };

      const createdRule = await approvalService.create(ruleData, approvers);
      res.status(201).json(createdRule);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create rule', details: err.message });
    }
  },

  async updateRule(req, res) {
    try {
      const { id } = req.params;
      const { 
        description, 
        rule_type, 
        is_manager_approver, 
        approval_percentage, 
        approvers 
      } = req.body;

      const updateData = {};
      if (description) updateData.description = description;
      if (rule_type) updateData.rule_type = rule_type;
      if (is_manager_approver !== undefined) updateData.is_manager_approver = is_manager_approver;
      if (approval_percentage !== undefined) updateData.approval_percentage = approval_percentage;

      const updatedRule = await approvalService.update(id, updateData, approvers);
      res.status(200).json(updatedRule);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update rule', details: err.message });
    }
  },

  async deleteRule(req, res) {
    try {
      const { id } = req.params;
      const deletedRule = await approvalService.delete(id);
      res.status(200).json({ message: 'Rule deleted successfully', rule: deletedRule });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete rule', details: err.message });
    }
  }
};
