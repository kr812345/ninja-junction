import express from 'express';
const router = express.Router();
import * as memberController from '../Controller/controller.member.js';
import { validateMemberCreation, validateMemberStatusUpdate, validateObjectId } from '../middleware/validation.js';
import { protect, authorizeRoles } from '../middleware/auth.js';

// Create a new membership application (Public)
router.post('/', validateMemberCreation, memberController.createMember);

// Protected Admin/Developer endpoints
// Get all membership applications
router.get('/', protect, authorizeRoles('admin', 'developer'), memberController.getMembers);

// Get a single membership application by ID
router.get('/:id', protect, authorizeRoles('admin', 'developer'), validateObjectId, memberController.getMemberById);

// Update the status of a membership application
router.patch('/:id/status', protect, authorizeRoles('admin', 'developer'), validateObjectId, validateMemberStatusUpdate, memberController.updateMemberStatus);

// Delete a membership application
router.delete('/:id', protect, authorizeRoles('admin', 'developer'), validateObjectId, memberController.deleteMember);

export default router;
