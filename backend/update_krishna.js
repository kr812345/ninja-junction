import connectDb from './utils/db.js';
import User from './Model/model.user.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

const updateKrishna = async () => {
  try {
    await connectDb();
    console.log('Connected to DB, finding user krishna...');
    
    const user = await User.findOne({ username: 'krishna' });
    if (!user) {
      console.log('User krishna not found in DB!');
      process.exit(1);
    }

    // Hash the plain text password
    const hashed = await bcrypt.hash('n0password', 10);
    user.password = hashed;
    
    // Ensure you have admin access
    if (!user.role || user.role !== 'admin') {
      user.role = 'admin';
    }
    
    await user.save();

    console.log('✅ Success! Password for krishna hashed and updated securely.');
    process.exit(0);

  } catch (error) {
    console.error('Failed to update user:', error);
    process.exit(1);
  }
};

updateKrishna();
