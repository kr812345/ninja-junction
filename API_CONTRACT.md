# Ninja Junction API Contract

## Base URL
All API requests should be prefixed with `/api`. Example: `http://localhost:3000/api`

## Authentication
Protected endpoints require a JWT token passed in the header:
`Authorization: Bearer <token>`

---

## 1. Auth API (`/api/users`)

### `POST /register`
- **Access**: Public
- **Description**: Registers a new dashboard user (Admin or Developer).
- **Body**:
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword",
    "role": "admin" // or "developer"
  }
  ```

### `POST /login`
- **Access**: Public
- **Description**: Authenticates a user and returns a JWT.
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```
- **Response**: Contains the `token` and `user` object.

---

## 2. Events API (`/api/events`)

### `GET /`
- **Access**: Public
- **Description**: Fetches all events.

### `GET /:id`
- **Access**: Public
- **Description**: Fetches a specific event by ID.

### `POST /`
- **Access**: Protected (Admin, Developer)
- **Description**: Creates a new event.
- **Body**: 
  ```json
  {
    "name": "Ninja Hackathon",
    "description": "Annual 24-hour hackathon.",
    "image": "https://example.com/image.png",
    "sponsor": "TechCorp", 
    "timestamp": "2026-05-10T10:00:00Z"
  }
  ```

### `PUT /:id`
- **Access**: Protected (Admin, Developer)
- **Description**: Updates an existing event.
- **Body**: Any of the fields from the `POST` request.

### `DELETE /:id`
- **Access**: Protected (Admin, Developer)
- **Description**: Deletes an event.

---

## 3. Members API (`/api/members`)

### `POST /`
- **Access**: Public
- **Description**: Submits a new membership application (joining the community).
- **Body**:
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "university": "State University",
    "program": "Computer Science",
    "year": "3rd Year",
    "location": {
      "city": "New York",
      "country": "USA"
    },
    "reason": "I want to collaborate.",
    "skills": "React, Node.js", // Optional
    "interests": "AI, Web Dev", // Optional
    "github": "https://github.com/janedoe", // Optional
    "linkedin": "https://linkedin.com/in/janedoe" // Optional
  }
  ```

### `GET /`
- **Access**: Protected (Admin, Developer)
- **Description**: Retrieves all membership applications. Supports pagination/filtering via query params (`?page=1&limit=10&status=pending`).

### `GET /:id`
- **Access**: Protected (Admin, Developer)
- **Description**: Retrieves a single application by ID.

### `PATCH /:id/status`
- **Access**: Protected (Admin, Developer)
- **Description**: Updates the application status.
- **Body**:
  ```json
  {
    "status": "accepted" // "pending", "reviewed", "accepted", "rejected"
  }
  ```

### `DELETE /:id`
- **Access**: Protected (Admin, Developer)
- **Description**: Deletes an application.

---

## 4. Contacts API (`/api/contacts`)

### `POST /`
- **Access**: Public
- **Description**: Submits a contact form message.
- **Body**:
  ```json
  {
    "name": "Alex",
    "email": "alex@example.com",
    "message": "Hello!"
  }
  ```

### `GET /`
- **Access**: Protected (Admin, Developer)
- **Description**: Retrieves all contact submissions. Supports query params (`?status=new`).

### `GET /:id`
- **Access**: Protected (Admin, Developer)
- **Description**: Fetches a single contact message.

### `PATCH /:id/status`
- **Access**: Protected (Admin, Developer)
- **Description**: Updates contact message status.
- **Body**:
  ```json
  {
    "status": "read" // "new", "read", "replied"
  }
  ```

### `DELETE /:id`
- **Access**: Protected (Admin, Developer)
- **Description**: Deletes a contact submission.

---

## 5. Projects API (`/api/projects`)

*(Note: Currently unprotected in backend but assumed to be CRUD similar to above)*

### `GET /`
- **Access**: Public
- **Description**: List all projects.

### `POST /`
- **Access**: Public (Subject to future auth)
- **Description**: Creates a new project.

### `GET /:id`, `PUT /:id`, `DELETE /:id`
- **Access**: Public (Subject to future auth)
- **Description**: Read, update, delete operations for projects.
