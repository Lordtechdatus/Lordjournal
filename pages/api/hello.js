// API route: /api/hello
// Method: GET
// Response: JSON with a greeting message

export default function handler(req, res) {
  // Set CORS headers for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests for this endpoint
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are allowed for this endpoint'
    });
  }

  // Return success response
  res.status(200).json({
    message: 'Hello World',
    timestamp: new Date().toISOString(),
    endpoint: '/api/hello',
    method: req.method
  });
}
