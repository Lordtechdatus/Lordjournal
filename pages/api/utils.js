// API Utilities - Common helper functions for API routes

/**
 * Set CORS headers for API responses
 * @param {Object} res - Response object
 * @param {string} origin - Allowed origin (default: '*')
 */
export function setCorsHeaders(res, origin = '*') {
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

/**
 * Handle preflight OPTIONS request
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {boolean} - True if OPTIONS request was handled
 */
export function handleOptionsRequest(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
}

/**
 * Validate required fields in request body
 * @param {Object} body - Request body
 * @param {Array} requiredFields - Array of required field names
 * @returns {Object} - Validation result with isValid and missing fields
 */
export function validateRequiredFields(body, requiredFields) {
  const missing = requiredFields.filter(field => !body[field]);
  return {
    isValid: missing.length === 0,
    missing,
    message: missing.length > 0 ? `Missing required fields: ${missing.join(', ')}` : 'All required fields present'
  };
}

/**
 * Create standardized API response
 * @param {Object} res - Response object
 * @param {number} statusCode - HTTP status code
 * @param {Object} data - Response data
 * @param {string} message - Optional message
 */
export function sendResponse(res, statusCode, data, message = null) {
  const response = {
    success: statusCode >= 200 && statusCode < 300,
    timestamp: new Date().toISOString(),
    ...data
  };
  
  if (message) {
    response.message = message;
  }
  
  res.status(statusCode).json(response);
}

/**
 * Create error response
 * @param {Object} res - Response object
 * @param {number} statusCode - HTTP status code
 * @param {string} error - Error message
 * @param {string} details - Optional error details
 */
export function sendError(res, statusCode, error, details = null) {
  const errorResponse = {
    success: false,
    error,
    timestamp: new Date().toISOString(),
    statusCode
  };
  
  if (details) {
    errorResponse.details = details;
  }
  
  res.status(statusCode).json(errorResponse);
}

/**
 * Parse and validate pagination parameters
 * @param {Object} query - Query parameters
 * @param {number} defaultLimit - Default limit (default: 10)
 * @param {number} maxLimit - Maximum limit (default: 100)
 * @returns {Object} - Parsed pagination parameters
 */
export function parsePagination(query, defaultLimit = 10, maxLimit = 100) {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.min(maxLimit, Math.max(1, parseInt(query.limit) || defaultLimit));
  
  return {
    page,
    limit,
    offset: (page - 1) * limit
  };
}

/**
 * Apply pagination to array results
 * @param {Array} data - Array to paginate
 * @param {Object} pagination - Pagination object with page and limit
 * @returns {Object} - Paginated results with metadata
 */
export function paginateResults(data, pagination) {
  const { page, limit, offset } = pagination;
  const totalResults = data.length;
  const totalPages = Math.ceil(totalResults / limit);
  const results = data.slice(offset, offset + limit);
  
  return {
    results,
    pagination: {
      currentPage: page,
      totalPages,
      totalResults,
      limit,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  };
}

/**
 * Sanitize search query
 * @param {string} query - Search query string
 * @returns {string} - Sanitized query
 */
export function sanitizeQuery(query) {
  if (!query || typeof query !== 'string') return '';
  
  return query
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' ');   // Normalize whitespace
}

/**
 * Log API request for debugging
 * @param {Object} req - Request object
 * @param {string} endpoint - API endpoint name
 */
export function logApiRequest(req, endpoint) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${endpoint}`, {
    query: req.query,
    body: req.body,
    userAgent: req.headers['user-agent'],
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
}
