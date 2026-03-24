import connectDb from './utils/db.js';
import User from './Model/model.user.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const createInitialAdmin = async () => {
  try {
    await connectDb();
    console.log('Connected to DB, checking for existing admin...');
    
    const existing = await User.findOne({ email: 'admin@ninjajunction.com' });
    if (existing) {
      console.log('Admin already exists! You can log in with: admin@ninjajunction.com');
      process.exit(0);
    }

    const hashed = await bcrypt.hash('ninja2026', 10);
    await User.create({
      username: 'SuperAdmin',
      email: 'admin@ninjajunction.com',
      password: hashed,
      role: 'admin'
    });

    console.log('✅ Success! Initial Dashboard Admin created.');
    console.log('-----------------------------------------');
    console.log('You can now log into the frontend with:');
    console.log('Email: admin@ninjajunction.com');
    console.log('Password: ninja2026');
    console.log('-----------------------------------------');
    process.exit(0);

  } catch (error) {
    console.error('Failed to create admin:', error);
    process.exit(1);
  }
};

createInitialAdmin();
