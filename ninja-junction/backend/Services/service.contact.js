import Contact from "../Model/model.contact.js";

// Create a new contact
export const createContact = async (contactData) => {
  try {
    const contact = new Contact(contactData);
    const savedContact = await contact.save();
    return savedContact;
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      throw new Error(`Validation Error: ${messages.join(', ')}`);
    }
    throw new Error(`Failed to create contact: ${error.message}`);
  }
};

// Get all contacts with optional filtering and pagination
export const getAllContacts = async (options = {}) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = options;

    const query = {};
    if (status) {
      query.status = status;
    }

    const skip = (page - 1) * limit;
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const contacts = await Contact.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await Contact.countDocuments(query);

    return {
      contacts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalContacts: total,
        hasNextPage: page < Math.ceil(total / limit),
        hasPrevPage: page > 1
      }
    };
  } catch (error) {
    throw new Error(`Failed to fetch contacts: ${error.message}`);
  }
};

// Get a single contact by ID
export const getContactById = async (contactId) => {
  try {
    const contact = await Contact.findById(contactId);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return contact;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid contact ID format');
    }
    throw new Error(`Failed to fetch contact: ${error.message}`);
  }
};

// Update a contact by ID
export const updateContact = async (contactId, updateData) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      updateData,
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    if (!contact) {
      throw new Error('Contact not found');
    }
    
    return contact;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid contact ID format');
    }
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      throw new Error(`Validation Error: ${messages.join(', ')}`);
    }
    throw new Error(`Failed to update contact: ${error.message}`);
  }
};

// Delete a contact by ID
export const deleteContact = async (contactId) => {
  try {
    const contact = await Contact.findByIdAndDelete(contactId);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return contact;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid contact ID format');
    }
    throw new Error(`Failed to delete contact: ${error.message}`);
  }
};

// Get contacts by status
export const getContactsByStatus = async (status) => {
  try {
    const contacts = await Contact.find({ status })
      .sort({ createdAt: -1 })
      .lean();
    return contacts;
  } catch (error) {
    throw new Error(`Failed to fetch contacts by status: ${error.message}`);
  }
};

// Update contact status
export const updateContactStatus = async (contactId, status) => {
  try {
    const validStatuses = ['new', 'read', 'replied'];
    if (!validStatuses.includes(status)) {
      throw new Error('Invalid status. Must be one of: new, read, replied');
    }

    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      throw new Error('Contact not found');
    }
    
    return contact;
  } catch (error) {
    if (error.name === 'CastError') {
      throw new Error('Invalid contact ID format');
    }
    throw new Error(`Failed to update contact status: ${error.message}`);
  }
};
