import express from 'express';
const router = express.Router();
import * as memberController from '../Controller/controller.member.js';
import { validateMemberCreation, validateMemberStatusUpdate, validateObjectId } from '../middleware/validation.js';

// Create a new membership application
router.post('/', validateMemberCreation, memberController.createMember);

// Get all membership applications
router.get('/', memberController.getMembers);

// Get a single membership application by ID
router.get('/:id', validateObjectId, memberController.getMemberById);

// Update the status of a membership application
router.patch('/:id/status', validateObjectId, validateMemberStatusUpdate, memberController.updateMemberStatus);

// Delete a membership application
router.delete('/:id', validateObjectId, memberController.deleteMember);

export default router;
