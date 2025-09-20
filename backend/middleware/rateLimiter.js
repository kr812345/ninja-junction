// Rate limiting middleware to prevent spam

const rateLimitStore = new Map();

// Clean up old entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of rateLimitStore.entries()) {
    if (now - data.resetTime > 0) {
      rateLimitStore.delete(key);
    }
  }
}, 15 * 60 * 1000);

// Rate limiter for contact form submissions
export const contactRateLimit = (req, res, next) => {
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Maximum 5 contact submissions per 15 minutes per IP
  
  const clientIP = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
  const key = `contact_${clientIP}`;
  const now = Date.now();
  
  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return next();
  }
  
  const data = rateLimitStore.get(key);
  
  if (now > data.resetTime) {
    // Reset the counter
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return next();
  }
  
  if (data.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many contact submissions. Please try again later.',
      retryAfter: Math.ceil((data.resetTime - now) / 1000)
    });
  }
  
  data.count++;
  rateLimitStore.set(key, data);
  next();
};

// General rate limiter for API endpoints
export const generalRateLimit = (req, res, next) => {
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100; // Maximum 100 requests per 15 minutes per IP
  
  const clientIP = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
  const key = `general_${clientIP}`;
  const now = Date.now();
  
  if (!rateLimitStore.has(key)) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return next();
  }
  
  const data = rateLimitStore.get(key);
  
  if (now > data.resetTime) {
    // Reset the counter
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return next();
  }
  
  if (data.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((data.resetTime - now) / 1000)
    });
  }
  
  data.count++;
  rateLimitStore.set(key, data);
  next();
};
