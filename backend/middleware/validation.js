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

// Validate member creation data
export const validateMemberCreation = (req, res, next) => {
  const { name, email, university, program, year, location, skills, interests, github, linkedin, reason } = req.body;
  const errors = [];

  // Required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) errors.push('Name is required.');
  if (!email || typeof email !== 'string' || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) errors.push('A valid email is required.');
  if (!university || typeof university !== 'string' || university.trim().length === 0) errors.push('University/College is required.');
  if (!program || typeof program !== 'string' || program.trim().length === 0) errors.push('Program is required.');
  if (!year || typeof year !== 'string' || year.trim().length === 0) errors.push('Year is required.');
  if (!location || !location.city || typeof location.city !== 'string' || location.city.trim().length === 0) errors.push('City is required.');
  if (!location || !location.country || typeof location.country !== 'string' || location.country.trim().length === 0) errors.push('Country is required.');
  if (!reason || typeof reason !== 'string' || reason.trim().length === 0) errors.push('Reason to join is required.');

  // Optional fields validation
  if (github && !/^https?:\/\/(?:www\.)?github\.com\/[A-z0-9_-]+\/?$/.test(github.trim())) errors.push('Invalid GitHub URL.');
  if (linkedin && !/^https?:\/\/(?:www\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?$/.test(linkedin.trim())) errors.push('Invalid LinkedIn URL.');

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors });
  }

  // Trim and sanitize
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.university = university.trim();
  req.body.program = program.trim();
  req.body.year = year.trim();
  req.body.location = {
    city: location.city.trim(),
    country: location.country.trim()
  };
  req.body.reason = reason.trim();
  if (skills) req.body.skills = skills.trim();
  if (interests) req.body.interests = interests.trim();
  if (github) req.body.github = github.trim();
  if (linkedin) req.body.linkedin = linkedin.trim();

  next();
};

// Validate member status update
export const validateMemberStatusUpdate = (req, res, next) => {
  const { status } = req.body;
  const validStatuses = ['pending', 'reviewed', 'accepted', 'rejected'];

  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Validation failed', 
      errors: [`Status must be one of: ${validStatuses.join(', ')}`]
    });
  }

  next();
};

// Validate event creation data
export const validateEventCreation = (req, res, next) => {
  const { name, description, image, sponsor, timestamp } = req.body;
  const errors = [];

  if (!name || typeof name !== 'string' || name.trim().length === 0) errors.push('Name is required.');
  if (!description || typeof description !== 'string' || description.trim().length === 0) errors.push('Description is required.');
  if (!image || typeof image !== 'string' || image.trim().length === 0) errors.push('Image is required.');
  if (!timestamp || isNaN(Date.parse(timestamp))) errors.push('A valid timestamp is required.');

  if (errors.length > 0) return res.status(400).json({ success: false, message: 'Validation failed', errors });

  req.body.name = name.trim();
  req.body.description = description.trim();
  req.body.image = image.trim();
  if (sponsor) req.body.sponsor = sponsor.trim();

  next();
};

// Validate event update data
export const validateEventUpdate = (req, res, next) => {
  const { name, description, image, sponsor, timestamp } = req.body;
  
  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim().length === 0) return res.status(400).json({ success: false, errors: ['Name cannot be empty.'] });
    req.body.name = name.trim();
  }
  if (description !== undefined) {
    if (typeof description !== 'string' || description.trim().length === 0) return res.status(400).json({ success: false, errors: ['Description cannot be empty.'] });
    req.body.description = description.trim();
  }
  if (image !== undefined) {
    if (typeof image !== 'string' || image.trim().length === 0) return res.status(400).json({ success: false, errors: ['Image cannot be empty.'] });
    req.body.image = image.trim();
  }
  if (timestamp !== undefined) {
     if (isNaN(Date.parse(timestamp))) return res.status(400).json({ success: false, errors: ['Invalid timestamp.'] });
  }
  if (sponsor !== undefined && typeof sponsor === 'string') {
    req.body.sponsor = sponsor.trim();
  }

  next();
};
