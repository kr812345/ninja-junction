// backend/Routes/routes.project.js
import express from 'express';
import { addProject, listProjects, getProject, updateProject, deleteProject } from '../Controller/controller.projects.js';

const router = express.Router();

// POST /api/projects  – create new project
router.post('/', addProject);

// GET /api/projects  – list all projects
router.get('/', listProjects);

// GET /api/projects/:id – get project by id
router.get('/:id', getProject);

// PUT /api/projects/:id – update project
router.put('/:id', updateProject);

// DELETE /api/projects/:id – delete project
router.delete('/:id', deleteProject);

export default router;
