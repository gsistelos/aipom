# aipom
A simple RESTful API with Express and Mongoose.

# Getting Started
1. **Dependencies**
    * [Install Docker](https://docs.docker.com/get-docker/)
    * [Install Docker Compose](https://docs.docker.com/compose/install/)
2. **Environment Setup**
    * Create a `.env` file; see [.env.example](https://github.com/gsistelos/aipom/blob/main/.env.example)

You can now run `docker compose up --build -d` to start the API in a container.

# TL;DR Documentation

## Methods examples:

### GET:

Returns all users: `GET http://localhost:8080/api/users`

Returns all users with name "gsistelos": `GET http://localhost:8080/api/users?username=gsistelos`

Returns all users with email "gsistelos@proton.me": `GET http://localhost:8080/api/users?email=gsistelos@proton.me`

You can use any user field (username, email, password, createdAt, updatedAt, _id, __v) and you can mix queries.

You can also search by id like this: `GET http://localhost:8080/api/users/<id>`

### POST:

Creates a new user: `POST http://localhost:8080/api/users`

The request body contains information about the new user, it should look like this:
```json
{
  "username": "gsistelos",
  "email": "gsistelos@proton.me",
  "password": "test123"
}
```

### PATCH:

Updates a user: `PATCH http://localhost:8080/api/users/<id>`

The request body contains information about what to update, it should look like this:
```json
{
  "password": "new_password"
}
```

Any field can be updated.

### DELETE:

Deletes a user: `DELETE http://localhost:8080/api/users/<id>`
