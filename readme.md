# GOQii Full Stack Developer Technical Test

This repository contains the backend part of the technical test for a Full Stack Developer position at GOQii. The backend is developed using Node.js, Express, and MongoDB.

## Project Structure

goqii-fullstack-test/
├── models/
│ ├── user.js
│ ├── post.js
│ └── comment.js
├── routes/
│ ├── users.js
│ ├── posts.js
│ └── comments.js
├── config/
│ └── db.js
├── app.js
└── .env


## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd goqii-fullstack-test
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create an `.env` file in the root of the project with the following content:
    ```
    MONGO_URI=mongodb://localhost:27017/goqii
    PORT=5000
    ```

4. Start the server:
    ```bash
    npm start
    ```

The server should be running on `http://localhost:5000`.

## API Endpoints

### User Endpoints

- **Create a user**
    - `POST /api/users`
    - Request body:
        ```json
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "password": "password123",
            "dob": "1990-01-01"
        }
        ```

- **Get all users**
    - `GET /api/users`

- **Get a single user by ID**
    - `GET /api/users/:id`

- **Update a user by ID**
    - `PATCH /api/users/:id`
    - Request body (any field to update):
        ```json
        {
            "name": "John Updated"
        }
        ```

- **Delete a user by ID**
    - `DELETE /api/users/:id`

### Post Endpoints

- **Create a post**
    - `POST /api/posts`
    - Request body:
        ```json
        {
            "title": "Post Title",
            "content": "Post content",
            "author": "userId"
        }
        ```

- **Get all posts**
    - `GET /api/posts`

- **Get a single post by ID**
    - `GET /api/posts/:id`

- **Update a post by ID**
    - `PATCH /api/posts/:id`
    - Request body (any field to update):
        ```json
        {
            "title": "Updated Title"
        }
        ```

- **Delete a post by ID**
    - `DELETE /api/posts/:id`

### Comment Endpoints

- **Create a comment**
    - `POST /api/comments`
    - Request body:
        ```json
        {
            "content": "Comment content",
            "author": "userId",
            "post": "postId"
        }
        ```

- **Get all comments**
    - `GET /api/comments`

- **Get a single comment by ID**
    - `GET /api/comments/:id`

- **Update a comment by ID**
    - `PATCH /api/comments/:id`
    - Request body (any field to update):
        ```json
        {
            "content": "Updated content"
        }
        ```

- **Delete a comment by ID**
    - `DELETE /api/comments/:id`
