import { execSync } from 'child_process';
import 'dotenv/config';

try {
  console.log('Generating Prisma Client with loaded environment variables...');
  const env = { 
    ...process.env, 
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL 
  };
  
  execSync('npx prisma generate', { stdio: 'inherit', env });
  console.log('Prisma Client generated successfully!');
} catch (error) {
  console.error('Failed to generate Prisma Client:', error.message);
  process.exit(1);
}
