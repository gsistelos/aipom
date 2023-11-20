# RESTful-API

A simple RESTful API in Node.js using Express and Mongoose

# Features

- CRUD: create, read, update and delete data from the database
- Token authorization

# Usage

Create .env with your information (see [.env.example](https://github.com/gsistelos/restful-api/blob/main/.env.example))

### MongoDB

See [mongodb](https://github.com/gsistelos/restful-api/tree/main/mongodb) to start a mongodb container and test the API

Run `npm start`

# TL;DR Documentation

You need "Authorization" header with the API token to make any request

## Methods examples:

### GET:

Returns all users: `GET http://localhost:8080/api/users`

Returns all users with name "gsistelos": `GET http://localhost:8080/api/users?username=gsistelos`

Returns all users with email "gabrielsistelos@gmail.com": `GET http://localhost:8080/api/users?email=gabrielsistelos@gmail.com`

You can use any user field (username, email, password, createdAt, updatedAt, _id, __v) and you can mix queries

You can also search by id like this: `GET http://localhost:8080/api/users/<id>`

### POST:

Creates a new user: `POST http://localhost:8080/api/users`

The request body contains information about the new user, it should look like this:
```json
{
  "username": "gsistelos",
  "email": "gabrielsistelos@gmail.com",
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

Any field can be updated

### DELETE:

Deletes a user: `DELETE http://localhost:8080/api/users/<id>`
