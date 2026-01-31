import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address']
  },
  university: {
    type: String,
    required: [true, 'University/College is required'],
    trim: true
  },
  program: {
    type: String,
    required: [true, 'Program is required'],
    trim: true
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
    trim: true
  },
  skills: {
    type: String,
    trim: true
  },
  interests: {
    type: String,
    trim: true
  },
  github: {
    type: String,
    trim: true,
    match: [/^https?:\/\/github\.com\/[A-z0-9_-]+$/, 'Please enter a valid GitHub profile URL']
  },
  linkedin: {
    type: String,
    trim: true,
    match: [/^https?:\/\/www\.linkedin\.com\/in\/[A-z0-9_-]+\/?$/, 'Please enter a valid LinkedIn profile URL']
  },
  reason: {
    type: String,
    required: [true, 'Reason to join is required'],
    trim: true,
    maxlength: [2000, 'Reason cannot exceed 2000 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

memberSchema.index({ email: 1 });
memberSchema.index({ status: 1 });

const Member = mongoose.model('Member', memberSchema);

export default Member;
