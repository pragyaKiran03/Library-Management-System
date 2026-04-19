# Library Management System

A simple full-stack library management system with React frontend, Node.js/Express backend, and MongoDB database.

## Features

- User authentication (signup/login) with JWT
- Add, view, search, and delete books
- Books are user-specific

## Project Structure

```
library-management/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Book.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── books.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── BookForm.js
    │   │   └── BookList.js
    │   ├── pages/
    │   │   ├── Dashboard.js
    │   │   ├── Login.js
    │   │   └── Signup.js
    │   ├── App.css
    │   ├── App.js
    │   ├── index.css
    │   └── index.js
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```
   Update the values in `.env`:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secret key for JWT (use a strong random string)
   - `PORT`: Port for the server (default 5000)

4. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React app:
   ```
   npm start
   ```
   The app will run on http://localhost:3000

## Usage

1. Open http://localhost:3000 in your browser
2. Signup for a new account or login with existing credentials
3. On the dashboard, add books using the form
4. View all your books, search by title, or delete books

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Books (requires authentication)
- `GET /api/books` - Get all books for the user
- `POST /api/books` - Add a new book
- `DELETE /api/books/:id` - Delete a book by ID

## Notes

- JWT tokens are stored in localStorage
- Books are associated with the user who added them
- Basic error handling is implemented
- No advanced features like pagination or complex validation