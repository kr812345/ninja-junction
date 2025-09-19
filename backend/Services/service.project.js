// backend/Services/service.project.js
import Project from '../Model/model.project.js';

export const createProject = async (data) => {
  // basic safety: limit keywords
  if (Array.isArray(data.keywords) && data.keywords.length > 3) {
    throw new Error('Maximum 3 keywords allowed');
  }

  const project = new Project(data);
  return await project.save();
};

export const getAllProjects = async (filter = {}) => {
  // filter can be empty or include keywords, owner, etc.
  return await Project.find(filter).populate('owner', 'name email');
};

export const getProjectById = async (id) => {
  return await Project.findById(id).populate('owner', 'name email');
};

export const updateProject = async (id, data) => {
  // basic safety: limit keywords
  if (Array.isArray(data.keywords) && data.keywords.length > 3) {
    throw new Error('Maximum 3 keywords allowed');
  }
  return await Project.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};
