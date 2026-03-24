import express from "express";
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
  getContactsByStatus,
  updateContactStatus,
} from "../Controller/controller.contact.js";
import {
  validateContactCreation,
  validateContactUpdate,
  validateStatusUpdate,
  validateObjectId,
  validateQueryParams,
} from "../middleware/validation.js";
import { contactRateLimit } from "../middleware/rateLimiter.js";
import { protect, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

// CRUD Routes (Public POST)
router.post("/", contactRateLimit, validateContactCreation, createContact); // POST /api/contacts - Create a new contact

// Protected Admin/Developer endpoints
router.get("/", protect, authorizeRoles('admin', 'developer'), validateQueryParams, getAllContacts); // GET /api/contacts - Get all contacts with pagination and filtering
router.get("/:id", protect, authorizeRoles('admin', 'developer'), validateObjectId, getContactById); // GET /api/contacts/:id - Get a specific contact by ID
router.put("/:id", protect, authorizeRoles('admin', 'developer'), validateObjectId, validateContactUpdate, updateContact); // PUT /api/contacts/:id - Update a contact by ID
router.delete("/:id", protect, authorizeRoles('admin', 'developer'), validateObjectId, deleteContact); // DELETE /api/contacts/:id - Delete a contact by ID

// Additional Protected Routes
router.get("/status/:status", protect, authorizeRoles('admin', 'developer'), getContactsByStatus); // GET /api/contacts/status/:status - Get contacts by status
router.patch(
  "/:id/status",
  protect,
  authorizeRoles('admin', 'developer'),
  validateObjectId,
  validateStatusUpdate,
  updateContactStatus
); // PATCH /api/contacts/:id/status - Update contact status only

export default router;
