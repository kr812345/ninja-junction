import connectDb from './utils/db.js';
import * as authService from './Services/service.auth.js';
import dotenv from 'dotenv';
dotenv.config();

const testLogin = async () => {
  try {
    await connectDb();
    console.log('Connecting to search for admin...');
    const result = await authService.loginUser({
      email: 'admin@ninjajunction.com',
      password: 'ninja2026'
    });
    console.log('SUCCESS! JWT Generated:', result.token);
    process.exit(0);
  } catch (err) {
    console.error('FAILED TO LOGIN:', err.message);
    process.exit(1);
  }
};
testLogin();
