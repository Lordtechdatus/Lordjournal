// API route: /api/users
// Methods: GET, POST, PUT, DELETE
// Response: JSON with user data or operations

// Mock data for demonstration
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'researcher' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'reviewer' }
];

let nextId = 4;

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    switch (req.method) {
      case 'GET':
        // Get all users or specific user by ID
        const { id } = req.query;
        if (id) {
          const user = users.find(u => u.id === parseInt(id));
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          return res.status(200).json(user);
        }
        return res.status(200).json(users);

      case 'POST':
        // Create new user
        const { name, email, role } = req.body;
        if (!name || !email || !role) {
          return res.status(400).json({ 
            error: 'Missing required fields',
            required: ['name', 'email', 'role']
          });
        }
        
        const newUser = {
          id: nextId++,
          name,
          email,
          role,
          createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        return res.status(201).json(newUser);

      case 'PUT':
        // Update existing user
        const { id: updateId, ...updateData } = req.body;
        if (!updateId) {
          return res.status(400).json({ error: 'User ID is required' });
        }
        
        const userIndex = users.findIndex(u => u.id === parseInt(updateId));
        if (userIndex === -1) {
          return res.status(404).json({ error: 'User not found' });
        }
        
        users[userIndex] = { ...users[userIndex], ...updateData, updatedAt: new Date().toISOString() };
        return res.status(200).json(users[userIndex]);

      case 'DELETE':
        // Delete user
        const { id: deleteId } = req.query;
        if (!deleteId) {
          return res.status(400).json({ error: 'User ID is required' });
        }
        
        const deleteIndex = users.findIndex(u => u.id === parseInt(deleteId));
        if (deleteIndex === -1) {
          return res.status(404).json({ error: 'User not found' });
        }
        
        const deletedUser = users.splice(deleteIndex, 1)[0];
        return res.status(200).json({ 
          message: 'User deleted successfully',
          deletedUser 
        });

      default:
        return res.status(405).json({ 
          error: 'Method not allowed',
          allowedMethods: ['GET', 'POST', 'PUT', 'DELETE']
        });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Something went wrong on the server'
    });
  }
}
