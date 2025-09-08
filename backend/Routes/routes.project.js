// backend/Routes/routes.project.js
import express from 'express';
import { addProject, listProjects } from '../Controller/controller.projects.js';

const router = express.Router();

// POST /api/projects  – create new project
router.post('/', addProject);

// GET /api/projects  – list all projects
router.get('/', listProjects);

export default router;
