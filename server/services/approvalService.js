import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { db as prisma } from '../db/index.js';

const MOCK_RULES_PATH = path.resolve('data/fixtures/mock_rules.json');

const isMockMode = () => process.env.MOCK_MODE === 'true';

export const approvalService = {
  async getAll(companyId) {
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_RULES_PATH, 'utf-8');
      const rules = JSON.parse(data);
      return rules.filter(r => r.company_id === companyId && r.active !== false);
    }
    return await prisma.approvalRule.findMany({
      where: { company_id: companyId, active: true },
      include: { approvers: true }
    });
  },

  async create(ruleData, approversData) {
    let createdRule;
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_RULES_PATH, 'utf-8');
      const rules = JSON.parse(data);
      
      createdRule = {
        id: `rule-${crypto.randomUUID()}`,
        ...ruleData,
        active: true,
        created_at: new Date().toISOString(),
        approvers: approversData || []
      };
      
      rules.push(createdRule);
      await fs.writeFile(MOCK_RULES_PATH, JSON.stringify(rules, null, 2));
    } else {
      createdRule = await prisma.$transaction(async (tx) => {
        const rule = await tx.approvalRule.create({
          data: {
            ...ruleData,
            active: true
          }
        });

        if (approversData && approversData.length > 0) {
          await tx.approvalRuleApprover.createMany({
            data: approversData.map(a => ({
              ...a,
              approval_rule_id: rule.id
            }))
          });
        }
        
        return await tx.approvalRule.findUnique({
          where: { id: rule.id },
          include: { approvers: true }
        });
      });
    }
    
    return createdRule;
  },

  async update(id, updateData, approversData) {
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_RULES_PATH, 'utf-8');
      let rules = JSON.parse(data);
      const index = rules.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Rule not found');
      
      rules[index] = { ...rules[index], ...updateData };
      if (approversData) {
        rules[index].approvers = approversData;
      }
      
      await fs.writeFile(MOCK_RULES_PATH, JSON.stringify(rules, null, 2));
      return rules[index];
    }
    
    return await prisma.$transaction(async (tx) => {
      if (approversData) {
        await tx.approvalRuleApprover.deleteMany({ where: { approval_rule_id: id } });
        await tx.approvalRuleApprover.createMany({
          data: approversData.map(a => ({
            ...a,
            approval_rule_id: id
          }))
        });
      }
      
      return await tx.approvalRule.update({
        where: { id },
        data: updateData,
        include: { approvers: true }
      });
    });
  },

  async delete(id) {
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_RULES_PATH, 'utf-8');
      let rules = JSON.parse(data);
      const index = rules.findIndex(r => r.id === id);
      if (index === -1) throw new Error('Rule not found');
      
      rules[index].active = false;
      await fs.writeFile(MOCK_RULES_PATH, JSON.stringify(rules, null, 2));
      return rules[index];
    }
    
    return await prisma.approvalRule.update({
      where: { id },
      data: { active: false }
    });
  }
};
