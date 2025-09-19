import * as contactService from "../Services/service.contact.js";

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const contact = await contactService.createContact(req.body);
    res.status(201).json({
      success: true,
      message: "Contact created successfully",
      data: contact
    });
  } catch (error) {
    if (error.message.includes('Validation Error')) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const options = {
      page: req.query.page,
      limit: req.query.limit,
      status: req.query.status,
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder
    };

    const result = await contactService.getAllContacts(options);
    res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully",
      data: result.contacts,
      pagination: result.pagination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Get a single contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Contact retrieved successfully",
      data: contact
    });
  } catch (error) {
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    if (error.message === 'Invalid contact ID format') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Update a contact by ID
export const updateContact = async (req, res) => {
  try {
    const contact = await contactService.updateContact(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: contact
    });
  } catch (error) {
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    if (error.message === 'Invalid contact ID format') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    if (error.message.includes('Validation Error')) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
  try {
    const contact = await contactService.deleteContact(req.params.id);
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      data: contact
    });
  } catch (error) {
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    if (error.message === 'Invalid contact ID format') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Get contacts by status
export const getContactsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const contacts = await contactService.getContactsByStatus(status);
    res.status(200).json({
      success: true,
      message: `Contacts with status '${status}' retrieved successfully`,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Update contact status
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const contact = await contactService.updateContactStatus(id, status);
    res.status(200).json({
      success: true,
      message: "Contact status updated successfully",
      data: contact
    });
  } catch (error) {
    if (error.message === 'Contact not found') {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    if (error.message === 'Invalid contact ID format') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    if (error.message.includes('Invalid status')) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
