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

const router = express.Router();

// CRUD Routes
router.post("/", contactRateLimit, validateContactCreation, createContact); // POST /api/contacts - Create a new contact
router.get("/", validateQueryParams, getAllContacts); // GET /api/contacts - Get all contacts with pagination and filtering
router.get("/:id", validateObjectId, getContactById); // GET /api/contacts/:id - Get a specific contact by ID
router.put("/:id", validateObjectId, validateContactUpdate, updateContact); // PUT /api/contacts/:id - Update a contact by ID
router.delete("/:id", validateObjectId, deleteContact); // DELETE /api/contacts/:id - Delete a contact by ID

// Additional Routes
router.get("/status/:status", getContactsByStatus); // GET /api/contacts/status/:status - Get contacts by status
router.patch(
  "/:id/status",
  validateObjectId,
  validateStatusUpdate,
  updateContactStatus
); // PATCH /api/contacts/:id/status - Update contact status only

export default router;
