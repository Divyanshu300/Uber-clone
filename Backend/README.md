
# Backend API Documentation

This documentation outlines the details of all the endpoints in the backend, including their descriptions, request/response formats, and error handling.

---

## Table of Contents

1. [Overview](#overview)
2. [General Guidelines](#general-guidelines)
3. [Endpoints](#endpoints)
   - [User Endpoints](#user-endpoints)
4. [Future Additions](#future-additions)
5. [Contact](#contact)

---

## Overview

This project provides a backend API for handling user registration, authentication, and other functionalities. It is built using Node.js, Express.js, and MongoDB.

---

## General Guidelines

- All requests must be made to the `/api` base URL.
- Responses will be in JSON format.
- Secure authentication is implemented using JSON Web Tokens (JWT).

---

## Endpoints

### User Endpoints

#### 1. Register User

**HTTP Method:** `POST`  
**Endpoint:** `/user/register`  

**Description:** Registers a new user and returns a JWT token along with user details.

##### Request Body

| Field                 | Type     | Required | Description                                |
|-----------------------|----------|----------|--------------------------------------------|
| `fullname`            | Object   | Yes      | Contains the user's first and last name.   |
| `fullname.firstname`  | String   | Yes      | User's first name (at least 3 characters).|
| `fullname.lastname`   | String   | No       | User's last name (optional, at least 3 characters if provided). |
| `email`               | String   | Yes      | User's email address (must be unique).     |
| `password`            | String   | Yes      | User's password (minimum 6 characters).    |

**Example Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

##### Success Response

**Status Code:** `201 Created`

```json
{
  "success": true,
  "message": "User created successfully",
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "64b9e2d0f6e5c6b8d7e4a5a8",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

##### Error Response

**Status Code:** `400 Bad Request`  

**Validation Errors:**

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Duplicate Email Error:**

```json
{
  "errors": [
    {
      "msg": "Email already exists",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

## Future Additions

This section is reserved for documenting additional endpoints and functionalities in the future. Each new endpoint should include the following details:

1. **HTTP Method and Endpoint**  
   - Description of the endpoint and its purpose.

2. **Request Body (if applicable)**  
   - Table describing the fields, their types, requirements, and descriptions.

3. **Response**  
   - Success and error responses with status codes.

4. **Example Usage**  
   - Sample requests and responses for easy reference.

---

## Contact

For any issues or queries, please contact the backend development team.

---
