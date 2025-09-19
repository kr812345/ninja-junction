// Validation middleware for contact endpoints

// Validate contact creation data
export const validateContactCreation = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  // Validate name
  if (!name || typeof name !== 'string') {
    errors.push('Name is required and must be a string');
  } else if (name.trim().length === 0) {
    errors.push('Name cannot be empty');
  } else if (name.length > 100) {
    errors.push('Name cannot exceed 100 characters');
  }

  // Validate email
  if (!email || typeof email !== 'string') {
    errors.push('Email is required and must be a string');
  } else {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email.trim())) {
      errors.push('Please enter a valid email address');
    }
  }

  // Validate message
  if (!message || typeof message !== 'string') {
    errors.push('Message is required and must be a string');
  } else if (message.trim().length === 0) {
    errors.push('Message cannot be empty');
  } else if (message.length > 1000) {
    errors.push('Message cannot exceed 1000 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  // Trim whitespace from string fields
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();

  next();
};

// Validate contact update data
export const validateContactUpdate = (req, res, next) => {
  const { name, email, message, status } = req.body;
  const errors = [];

  // Validate name if provided
  if (name !== undefined) {
    if (typeof name !== 'string') {
      errors.push('Name must be a string');
    } else if (name.trim().length === 0) {
      errors.push('Name cannot be empty');
    } else if (name.length > 100) {
      errors.push('Name cannot exceed 100 characters');
    }
  }

  // Validate email if provided
  if (email !== undefined) {
    if (typeof email !== 'string') {
      errors.push('Email must be a string');
    } else {
      const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email.trim())) {
        errors.push('Please enter a valid email address');
      }
    }
  }

  // Validate message if provided
  if (message !== undefined) {
    if (typeof message !== 'string') {
      errors.push('Message must be a string');
    } else if (message.trim().length === 0) {
      errors.push('Message cannot be empty');
    } else if (message.length > 1000) {
      errors.push('Message cannot exceed 1000 characters');
    }
  }

  // Validate status if provided
  if (status !== undefined) {
    const validStatuses = ['new', 'read', 'replied'];
    if (!validStatuses.includes(status)) {
      errors.push('Status must be one of: new, read, replied');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  // Trim whitespace from string fields if they exist
  if (name !== undefined) req.body.name = name.trim();
  if (email !== undefined) req.body.email = email.trim().toLowerCase();
  if (message !== undefined) req.body.message = message.trim();

  next();
};

// Validate status update
export const validateStatusUpdate = (req, res, next) => {
  const { status } = req.body;
  const errors = [];

  if (!status) {
    errors.push('Status is required');
  } else {
    const validStatuses = ['new', 'read', 'replied'];
    if (!validStatuses.includes(status)) {
      errors.push('Status must be one of: new, read, replied');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  next();
};

// Validate MongoDB ObjectId format
export const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  const objectIdRegex = /^[0-9a-fA-F]{24}$/;

  if (!objectIdRegex.test(id)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    });
  }

  next();
};

// Validate query parameters for pagination and filtering
export const validateQueryParams = (req, res, next) => {
  const { page, limit, status, sortBy, sortOrder } = req.query;
  const errors = [];

  // Validate page
  if (page !== undefined) {
    const pageNum = parseInt(page);
    if (isNaN(pageNum) || pageNum < 1) {
      errors.push('Page must be a positive integer');
    }
  }

  // Validate limit
  if (limit !== undefined) {
    const limitNum = parseInt(limit);
    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      errors.push('Limit must be a positive integer between 1 and 100');
    }
  }

  // Validate status
  if (status !== undefined) {
    const validStatuses = ['new', 'read', 'replied'];
    if (!validStatuses.includes(status)) {
      errors.push('Status must be one of: new, read, replied');
    }
  }

  // Validate sortBy
  if (sortBy !== undefined) {
    const validSortFields = ['name', 'email', 'status', 'createdAt', 'updatedAt'];
    if (!validSortFields.includes(sortBy)) {
      errors.push('SortBy must be one of: name, email, status, createdAt, updatedAt');
    }
  }

  // Validate sortOrder
  if (sortOrder !== undefined) {
    const validSortOrders = ['asc', 'desc'];
    if (!validSortOrders.includes(sortOrder)) {
      errors.push('SortOrder must be either asc or desc');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid query parameters',
      errors: errors
    });
  }

  next();
};
