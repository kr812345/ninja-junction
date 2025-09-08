// backend/Controller/controller.projects.js
import * as projectService from '../Services/service.project.js';

export const addProject = async (req, res) => {
  try {
    const { title, githubLink, description, maxContributors, keywords } = req.body;

    // replace with real logged-in user id (from auth middleware)
    const owner = req.user?._id || '64b7f9d5a1234567890abcd1'; // demo fallback

    const project = await projectService.createProject({
      title,
      githubLink,
      description,
      maxContributors,
      keywords,
      owner
    });

    res.status(201).json({ message: 'Project created', project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const listProjects = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });}
  }
