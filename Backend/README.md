# Uber Clone Backend

This is the backend for the Uber Clone application. It is built using Node.js, Express.js, and MongoDB. It provides APIs for user authentication, ride booking, and other services.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```

## API Documentation

### User Authentication

#### Register User

**Endpoint:** `/users/register`  
**Method:** `POST`

**Request Body:**

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

**Validation:**

- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

**Response:**

- Success:
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "token": "<jwt-token>",
    "user": {
      "_id": "<user-id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```
- Error:
  ```json
  {
    "errors": [{ "msg": "Error message", "param": "field", "location": "body" }]
  }
  ```

#### Login User

**Endpoint:** `/users/login`  
**Method:** `POST`

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation:**

- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

**Response:**

- Success:
  ```json
  {
    "token": "<jwt-token>",
    "user": {
      "_id": "<user-id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```
- Error:
  ```json
  {
    "errors": [{ "msg": "Error message", "param": "field", "location": "body" }]
  }
  ```

#### Get User Profile

**Endpoint:** `/users/profile`  
**Method:** `GET`  
**Headers:**

```json
{
  "Authorization": "Bearer <jwt-token>"
}
```

**Response:**

- Success:
  ```json
  {
    "_id": "<user-id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
  ```
- Error:
  ```json
  {
    "success": false,
    "message": "Unauthorized"
  }
  ```

#### Logout User

**Endpoint:** `/users/logout`  
**Method:** `GET`  
**Headers:**

```json
{
  "Authorization": "Bearer <jwt-token>"
}
```

**Response:**

- Success:
  ```json
  {
    "success": true,
    "message": "Logged Out"
  }
  ```
- Error:
  ```json
  {
    "success": false,
    "message": "Unauthorized"
  }
  ```

### Captain Authentication

#### Register Captain

**Endpoint:** `/captains/register`  
**Method:** `POST`

**Request Body:**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123",
  "vehicle" : {
    "color" : "red",
    "plate" : "MP 04 XY 6204",
    "capacity" : 3,
    "vehicleType" : "car"
  }
}
```

**Validation:**

- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.
- `vehicle.color`: Must be at least 3 characters long.
- `vehicle.plate`: Must be at least 3 characters long.
- `vehicle.capacity`: Capacity must be atleast 1.
- `vehicle.vehicleType`: Must be 'car' or 'motorcycle' or 'auto'.

**Response:**

- Success:
  ```json
  {
    "success": true,
    "message": "User created successfully",
    "token": "<jwt-token>",
    "captain": {
      "_id": "<user-id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "status": "inactive",
      "vehicle": {
          "color": "red",
          "plate": "MP 04 XY 6204",
          "capacity": 3,
          "vehicleType": "car"
      },
    }
  }
  ```
- Error:
  ```json
  {
    "errors": [{ "msg": "Error message", "param": "field", "location": "body" }]
  }
  ```
<!-- 
#### Login User

**Endpoint:** `/users/login`  
**Method:** `POST`

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Validation:**

- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

**Response:**

- Success:
  ```json
  {
    "token": "<jwt-token>",
    "user": {
      "_id": "<user-id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
    }
  }
  ```
- Error:
  ```json
  {
    "errors": [{ "msg": "Error message", "param": "field", "location": "body" }]
  }
  ```

#### Get User Profile

**Endpoint:** `/users/profile`  
**Method:** `GET`  
**Headers:**

```json
{
  "Authorization": "Bearer <jwt-token>"
}
```

**Response:**

- Success:
  ```json
  {
    "_id": "<user-id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
  ```
- Error:
  ```json
  {
    "success": false,
    "message": "Unauthorized"
  }
  ```

#### Logout User

**Endpoint:** `/users/logout`  
**Method:** `GET`  
**Headers:**

```json
{
  "Authorization": "Bearer <jwt-token>"
}
```

**Response:**

- Success:
  ```json
  {
    "success": true,
    "message": "Logged Out"
  }
  ```
- Error:
  ```json
  {
    "success": false,
    "message": "Unauthorized"
  }
  ``` -->

## Future Enhancements

- Add more endpoints for managing rides, payments, and driver interactions.
- Add unit tests for all routes and controllers.
- Implement WebSocket for real-time ride tracking.
