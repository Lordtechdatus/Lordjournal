// API route: /api/health
// Method: GET
// Response: JSON with system health status

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are allowed for this endpoint'
    });
  }

  try {
    // Get system information
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage();
    const nodeVersion = process.version;
    const platform = process.platform;
    
    // Calculate uptime in human-readable format
    const formatUptime = (seconds) => {
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = Math.floor(seconds % 60);
      
      return {
        days,
        hours,
        minutes,
        seconds: secs,
        total: seconds
      };
    };

    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: formatUptime(uptime),
      system: {
        nodeVersion,
        platform,
        memory: {
          rss: `${Math.round(memoryUsage.rss / 1024 / 1024)} MB`,
          heapTotal: `${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`,
          heapUsed: `${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`,
          external: `${Math.round(memoryUsage.external / 1024 / 1024)} MB`
        }
      },
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      endpoints: {
        hello: '/api/hello',
        users: '/api/users',
        search: '/api/search',
        health: '/api/health'
      }
    };

    res.status(200).json(healthStatus);
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'unhealthy',
      error: 'Health check failed',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
