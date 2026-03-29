import 'dotenv/config';
import { db } from './server/db/index.js';
import axios from 'axios';

async function verifyM1() {
  console.log('--- Checking Member 1 (M1) Foundational Base ---');
  
  const requiredEnv = ['DATABASE_URL', 'SUPABASE_URL', 'SUPABASE_ANON_KEY'];
  requiredEnv.forEach(key => {
    if (process.env[key]) {
      console.log(`✅ Environment variable ${key} is set.`);
    } else {
      console.log(`❌ Environment variable ${key} is MISSING!`);
    }
  });

  try {
    await db.$connect();
    console.log('✅ Database connection successful via Prisma 7.');
  } catch (err) {
    console.log('❌ Database connection FAILED:', err.message);
  } finally {
    await db.$disconnect();
  }
}

async function verifyM2() {
  console.log('\n--- Checking Member 2 (M2) Functional API ---');
  
  const serverUrl = 'http://127.0.0.1:3000';
  try {
    const res = await axios.get(`${serverUrl}/`);
    if (res.status === 200 && res.data.message.includes('integrated')) {
      console.log('✅ Express integrated server is responding correctly.');
    } else {
      console.log('❌ Express server response is unexpected.');
    }
  } catch (err) {
    console.log('❌ Express server is NOT reachable on port 3000. Please run "npm start" first.');
  }

  try {
    const res = await axios.get(`${serverUrl}/api/users`).catch(e => e.response);
    if (res && res.status === 401) {
      console.log('✅ Authentication middleware is active (returned 401 for protected route).');
    } else {
      console.log('⚠️ Authentication middleware check was inconclusive.');
    }
  } catch (err) {
    // silent
  }
}

async function runVerification() {
  await verifyM1();
  await verifyM2();
  console.log('\n--- Verification Finished ---');
}

runVerification();
