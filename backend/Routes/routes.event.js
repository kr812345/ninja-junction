import express from 'express';
const router = express.Router();
import * as eventController from '../Controller/controller.event.js';
import { validateEventCreation, validateEventUpdate, validateObjectId } from '../middleware/validation.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

// Public endpoints
router.get('/', eventController.getEvents);
router.get('/:id', validateObjectId, eventController.getEventById);

// Protected Admin/Developer endpoints
router.post('/', protect, authorizeRoles('admin', 'developer'), validateEventCreation, eventController.createEvent);
router.put('/:id', protect, authorizeRoles('admin', 'developer'), validateObjectId, validateEventUpdate, eventController.updateEvent);
router.delete('/:id', protect, authorizeRoles('admin', 'developer'), validateObjectId, eventController.deleteEvent);

export default router;
