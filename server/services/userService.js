import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { db as prisma } from '../db/index.js';

const MOCK_FILE_PATH = path.resolve('data/fixtures/mock_users.json');

const isMockMode = () => process.env.MOCK_MODE === 'true';

const generatePassword = (length = 12) => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
};

export const userService = {
  async getAll(companyId) {
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_FILE_PATH, 'utf-8');
      const users = JSON.parse(data);
      return users.filter(u => u.company_id === companyId && u.active !== false);
    }
    return await prisma.user.findMany({
      where: { company_id: companyId, active: true }
    });
  },

  async create(userData) {
    const tempPassword = generatePassword();
    
    let user;
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_FILE_PATH, 'utf-8');
      const users = JSON.parse(data);
      user = {
        id: `u-${crypto.randomUUID()}`,
        ...userData,
        active: true,
        created_at: new Date().toISOString()
      };
      users.push(user);
      await fs.writeFile(MOCK_FILE_PATH, JSON.stringify(users, null, 2));
    } else {
      user = await prisma.user.create({
        data: {
          ...userData,
          password_hash: tempPassword,
          active: true
        }
      });
    }
    
    return { user, tempPassword };
  },

  async update(id, updateData) {
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_FILE_PATH, 'utf-8');
      let users = JSON.parse(data);
      const index = users.findIndex(u => u.id === id);
      if (index === -1) throw new Error('User not found');
      
      users[index] = { ...users[index], ...updateData };
      await fs.writeFile(MOCK_FILE_PATH, JSON.stringify(users, null, 2));
      return users[index];
    }
    return await prisma.user.update({
      where: { id },
      data: updateData
    });
  },

  async delete(id) {
    if (isMockMode()) {
      const data = await fs.readFile(MOCK_FILE_PATH, 'utf-8');
      let users = JSON.parse(data);
      const index = users.findIndex(u => u.id === id);
      if (index === -1) throw new Error('User not found');
      
      users[index].active = false;
      await fs.writeFile(MOCK_FILE_PATH, JSON.stringify(users, null, 2));
      return users[index];
    }
    return await prisma.user.update({
      where: { id },
      data: { active: false }
    });
  }
};
