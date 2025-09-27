# Ninja Junction - Member API Documentation

This document provides a comprehensive guide to the Member API for Ninja Junction, which handles membership applications.

## Table of Contents

1.  [Introduction](#introduction)
2.  [Base URL](#base-url)
3.  [Authentication](#authentication)
4.  [Data Model](#data-model)
5.  [API Endpoints](#api-endpoints)
    -   [Submit a Membership Application](#1-submit-a-membership-application)
    -   [Get All Membership Applications](#2-get-all-membership-applications)
    -   [Get a Single Application by ID](#3-get-a-single-application-by-id)
    -   [Update Application Status](#4-update-application-status)
    -   [Delete an Application](#5-delete-an-application)
6.  [Error Handling](#error-handling)

---

## Introduction

The Member API allows users to submit membership applications and administrators to manage them. It provides endpoints for creating, retrieving, updating, and deleting applications.

## Base URL

All API endpoints are relative to the following base URL:

```
/api/members
```

## Authentication

Currently, the public-facing endpoint for submitting an application (`POST /`) is open. Administrative endpoints (`GET`, `PATCH`, `DELETE`) should be protected by authentication and authorization middleware in a production environment.

## Data Model

The `Member` resource has the following structure:

```javascript
{
  "name": String,         // Required, Min 2, Max 100
  "email": String,        // Required, Unique, Valid email format
  "university": String,   // Required
  "program": String,      // Required
  "year": String,         // Required
  "skills": String,       // Optional
  "interests": String,    // Optional
  "github": String,       // Optional, Valid GitHub URL
  "linkedin": String,     // Optional, Valid LinkedIn URL
  "reason": String,       // Required, Max 2000
  "status": String,       // Enum: ['pending', 'reviewed', 'accepted', 'rejected'], Default: 'pending'
  "createdAt": Date,      // Automatically generated
  "updatedAt": Date       // Automatically generated
}
```

---

## API Endpoints

### 1. Submit a Membership Application

-   **Method:** `POST`
-   **URL:** `/api/members`
-   **Description:** Submits a new membership application.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "university": "State University",
  "program": "Computer Science",
  "year": "3rd Year",
  "skills": "React, Node.js, MongoDB",
  "interests": "Open Source, AI, Web Development",
  "github": "https://github.com/johndoe",
  "linkedin": "https://www.linkedin.com/in/johndoe/",
  "reason": "I am passionate about coding and want to collaborate on exciting projects."
}
```

#### Success Response (201 Created)

```json
{
  "message": "Application submitted successfully!",
  "member": {
    // Member object
  }
}
```

#### Error Response (400 Bad Request)

If validation fails:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required.",
    "A valid email is required."
  ]
}
```

### 2. Get All Membership Applications

-   **Method:** `GET`
-   **URL:** `/api/members`
-   **Description:** Retrieves a paginated list of all membership applications. Supports filtering by status.

#### Query Parameters

-   `page` (optional): The page number to retrieve (default: 1).
-   `limit` (optional): The number of items per page (default: 10).
-   `status` (optional): Filter applications by status (`pending`, `reviewed`, `accepted`, `rejected`).

#### Success Response (200 OK)

```json
{
  "members": [
    // Array of member objects
  ],
  "totalPages": 5,
  "currentPage": 1
}
```

### 3. Get a Single Application by ID

-   **Method:** `GET`
-   **URL:** `/api/members/:id`
-   **Description:** Retrieves a single membership application by its unique ID.

#### Success Response (200 OK)

```json
{
  // Member object
}
```

#### Error Response (404 Not Found)

If the application with the specified ID does not exist.

### 4. Update Application Status

-   **Method:** `PATCH`
-   **URL:** `/api/members/:id/status`
-   **Description:** Updates the status of a specific membership application.

#### Request Body

```json
{
  "status": "accepted"
}
```

#### Success Response (200 OK)

```json
{
  "message": "Application status updated successfully!",
  "member": {
    // Updated member object
  }
}
```

#### Error Response (400 Bad Request)

If the status is invalid.

### 5. Delete an Application

-   **Method:** `DELETE`
-   **URL:** `/api/members/:id`
-   **Description:** Deletes a membership application by its ID.

#### Success Response (200 OK)

```json
{
  "message": "Membership application deleted successfully"
}
```

#### Error Response (404 Not Found)

If the application with the specified ID does not exist.

---

## Error Handling

In addition to the specific error responses listed above, the API uses a global error handler that will catch other server-side errors and respond with a `500 Internal Server Error` status.
