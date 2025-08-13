# API Documentation - Lord Journals

This document describes all available API endpoints for the Lord Journals Next.js application.

## Base URL
```
http://localhost:3000/api
```

## Authentication
Currently, all endpoints are public. Future versions will include JWT authentication.

## Endpoints

### 1. Hello World
**GET** `/api/hello`

Simple greeting endpoint to test API connectivity.

**Response:**
```json
{
  "message": "Hello World",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "endpoint": "/api/hello",
  "method": "GET"
}
```

---

### 2. Users Management
**GET** `/api/users` - Get all users
**GET** `/api/users?id=1` - Get specific user
**POST** `/api/users` - Create new user
**PUT** `/api/users` - Update user
**DELETE** `/api/users?id=1` - Delete user

#### GET /api/users
**Query Parameters:**
- `id` (optional): User ID to retrieve specific user

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "researcher"
  }
]
```

#### POST /api/users
**Request Body:**
```json
{
  "name": "New User",
  "email": "newuser@example.com",
  "role": "editor"
}
```

**Response:**
```json
{
  "id": 4,
  "name": "New User",
  "email": "newuser@example.com",
  "role": "editor",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

#### PUT /api/users
**Request Body:**
```json
{
  "id": 1,
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

#### DELETE /api/users
**Query Parameters:**
- `id`: User ID to delete

---

### 3. Search Articles
**GET** `/api/search` - Simple search
**POST** `/api/search` - Advanced search

#### GET /api/search
**Query Parameters:**
- `q`: Search query
- `journal`: Filter by journal name
- `year`: Filter by publication year
- `author`: Filter by author name
- `limit`: Maximum results (default: 10)

**Example:**
```
GET /api/search?q=machine learning&year=2024&limit=5
```

**Response:**
```json
{
  "query": {
    "q": "machine learning",
    "year": "2024",
    "limit": "5"
  },
  "totalResults": 1,
  "results": [
    {
      "id": 1,
      "title": "Machine Learning Applications in Healthcare",
      "authors": ["Dr. Sarah Chen", "Prof. Michael Rodriguez"],
      "abstract": "This paper explores...",
      "journal": "Journal of Medical AI",
      "year": 2024,
      "doi": "10.1234/jmai.2024.001",
      "keywords": ["machine learning", "healthcare", "AI"],
      "citations": 45
    }
  ],
  "searchTime": "2024-01-01T00:00:00.000Z"
}
```

#### POST /api/search
**Request Body:**
```json
{
  "query": "quantum computing",
  "filters": {
    "journal": "Computational Security",
    "year": 2023
  },
  "sortBy": "citations",
  "page": 1,
  "limit": 10
}
```

**Sort Options:**
- `relevance` (default)
- `citations`
- `year`
- `title`

---

### 4. Health Check
**GET** `/api/health`

System health and status information.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": {
    "days": 0,
    "hours": 2,
    "minutes": 30,
    "seconds": 45,
    "total": 9045
  },
  "system": {
    "nodeVersion": "v18.17.0",
    "platform": "win32",
    "memory": {
      "rss": "45 MB",
      "heapTotal": "20 MB",
      "heapUsed": "15 MB",
      "external": "2 MB"
    }
  },
  "environment": "development",
  "version": "1.0.0",
  "endpoints": {
    "hello": "/api/hello",
    "users": "/api/users",
    "search": "/api/search",
    "health": "/api/health"
  }
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "statusCode": 400,
  "details": "Additional error details"
}
```

## HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `405` - Method Not Allowed
- `500` - Internal Server Error

## CORS

All endpoints support CORS with the following headers:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`

## Rate Limiting

Currently, no rate limiting is implemented. Future versions will include rate limiting for production use.

## Testing

You can test these endpoints using:

1. **Browser**: Navigate to `http://localhost:3000/api/hello`
2. **Postman**: Import the endpoints
3. **cURL**: Use command line tools
4. **Frontend**: Make fetch/axios requests from your React components

## Example Usage

### Frontend Integration

```javascript
// Search for articles
const searchArticles = async (query) => {
  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Search failed:', error);
    return [];
  }
};

// Create new user
const createUser = async (userData) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error('User creation failed:', error);
    throw error;
  }
};
```

## Future Enhancements

- [ ] JWT Authentication
- [ ] Rate Limiting
- [ ] Request Validation
- [ ] Database Integration
- [ ] File Upload Support
- [ ] WebSocket Support
- [ ] Caching Layer
- [ ] API Versioning

---

**API Version:** 1.0.0  
**Last Updated:** January 2024
