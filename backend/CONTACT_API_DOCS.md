# Contact API Documentation

## Overview
The Contact API provides CRUD (Create, Read, Update, Delete) operations for managing contact form submissions. It includes validation, rate limiting, and error handling middleware.

## Base URL
```
/api/contacts
```

## Data Model
```javascript
{
  _id: ObjectId,
  name: String (required, max 100 chars),
  email: String (required, valid email format),
  message: String (required, max 1000 chars),
  status: String (enum: ['new', 'read', 'replied'], default: 'new'),
  createdAt: Date,
  updatedAt: Date
}
```

## Endpoints

### 1. Create Contact
**POST** `/api/contacts`

Creates a new contact submission.

**Rate Limit:** 5 requests per 15 minutes per IP

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I would like to get in touch."
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Contact created successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to get in touch.",
    "status": "new",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

**Validation Errors (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required and must be a string",
    "Please enter a valid email address"
  ]
}
```

---

### 2. Get All Contacts
**GET** `/api/contacts`

Retrieves all contacts with pagination and filtering options.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)
- `status` (optional): Filter by status ('new', 'read', 'replied')
- `sortBy` (optional): Sort field ('name', 'email', 'status', 'createdAt', 'updatedAt')
- `sortOrder` (optional): Sort direction ('asc', 'desc', default: 'desc')

**Example Request:**
```
GET /api/contacts?page=1&limit=5&status=new&sortBy=createdAt&sortOrder=desc
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contacts retrieved successfully",
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello, I would like to get in touch.",
      "status": "new",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 3,
    "totalContacts": 15,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

---

### 3. Get Contact by ID
**GET** `/api/contacts/:id`

Retrieves a specific contact by its ID.

**Parameters:**
- `id`: MongoDB ObjectId of the contact

**Response (200):**
```json
{
  "success": true,
  "message": "Contact retrieved successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to get in touch.",
    "status": "new",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

**Error (404):**
```json
{
  "success": false,
  "message": "Contact not found"
}
```

---

### 4. Update Contact
**PUT** `/api/contacts/:id`

Updates a contact by its ID.

**Parameters:**
- `id`: MongoDB ObjectId of the contact

**Request Body (all fields optional):**
```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "message": "Updated message content.",
  "status": "read"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contact updated successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Smith",
    "email": "johnsmith@example.com",
    "message": "Updated message content.",
    "status": "read",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T11:45:00.000Z"
  }
}
```

---

### 5. Delete Contact
**DELETE** `/api/contacts/:id`

Deletes a contact by its ID.

**Parameters:**
- `id`: MongoDB ObjectId of the contact

**Response (200):**
```json
{
  "success": true,
  "message": "Contact deleted successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to get in touch.",
    "status": "new",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

---

### 6. Get Contacts by Status
**GET** `/api/contacts/status/:status`

Retrieves all contacts with a specific status.

**Parameters:**
- `status`: Contact status ('new', 'read', 'replied')

**Response (200):**
```json
{
  "success": true,
  "message": "Contacts with status 'new' retrieved successfully",
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello, I would like to get in touch.",
      "status": "new",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  ]
}
```

---

### 7. Update Contact Status
**PATCH** `/api/contacts/:id/status`

Updates only the status of a contact.

**Parameters:**
- `id`: MongoDB ObjectId of the contact

**Request Body:**
```json
{
  "status": "read"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Contact status updated successfully",
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to get in touch.",
    "status": "read",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T11:45:00.000Z"
  }
}
```

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Specific validation error messages"]
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "Contact not found"
}
```

### Rate Limit Exceeded (429)
```json
{
  "success": false,
  "message": "Too many contact submissions. Please try again later.",
  "retryAfter": 300
}
```

### Internal Server Error (500)
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Detailed error message"
}
```

## Middleware Features

### 1. Validation Middleware
- **Contact Creation**: Validates name, email, and message fields
- **Contact Update**: Validates optional fields for updates
- **Status Update**: Validates status values
- **ObjectId Validation**: Ensures valid MongoDB ObjectId format
- **Query Parameters**: Validates pagination and filtering parameters

### 2. Rate Limiting
- **Contact Submissions**: 5 requests per 15 minutes per IP
- **General API**: 100 requests per 15 minutes per IP

### 3. Error Handling
- Global error handler for consistent error responses
- Specific handling for MongoDB errors, validation errors, and JWT errors
- 404 handler for undefined routes

## Usage Examples

### Create a new contact
```bash
curl -X POST http://localhost:3000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "I am interested in your services."
  }'
```

### Get all contacts with pagination
```bash
curl "http://localhost:3000/api/contacts?page=1&limit=5&status=new"
```

### Update contact status
```bash
curl -X PATCH http://localhost:3000/api/contacts/64f8a1b2c3d4e5f6a7b8c9d0/status \
  -H "Content-Type: application/json" \
  -d '{"status": "read"}'
```

### Delete a contact
```bash
curl -X DELETE http://localhost:3000/api/contacts/64f8a1b2c3d4e5f6a7b8c9d0
```

## Database Indexes
The Contact model includes the following indexes for optimal performance:
- `email`: Single field index
- `status`: Single field index  
- `createdAt`: Descending index for chronological sorting
