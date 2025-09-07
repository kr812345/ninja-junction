// backend/Model/model.project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    // project title
    title: { type: String, required: true, trim: true },

    // GitHub repository URL
    githubLink: { type: String, required: true, trim: true },

    // short description
    description: { type: String, trim: true },

    // how many people can join (max 5)
    maxContributors: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 1
    },

    // store search keywords/tags
    keywords: {
      type: [String], // array of strings
      validate: {
        validator: arr => arr.length <= 3,
        message: 'You can specify at most 3 keywords'
      }
    },

    // the user who created this project
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

// optionally force lowercase keywords
projectSchema.pre('save', function (next) {
  if (Array.isArray(this.keywords)) {
    this.keywords = this.keywords.map(k => k.toLowerCase().trim());
  }
  next();
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
