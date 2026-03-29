import { PrismaClient } from '../../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

// Ensure database URL is present
if (!process.env.DATABASE_URL) {
  console.warn('DATABASE_URL is not defined in .env! Prisma may fail to connect.');
}

// Initializing the PostgreSQL pool and driver adapter for Prisma 7.0
const pool = new pg.Pool({ 
  connectionString: process.env.DATABASE_URL 
});

const adapter = new PrismaPg(pool);

// Initializing Prisma Client with the driver adapter
const db = new PrismaClient({ adapter });

export { db };
export default db;
