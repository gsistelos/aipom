# restful-api

A Simple RESTful API in Node.js using Express and Mongoose

## Features

- CRUD: Create, Read, Update and Delete data from the database
- Token Authorization

## Usage

Create .env with your information (see [.env.example](https://github.com/gsistelos/restful-api/blob/main/.env.example))

### MongoDB

See [mongodb](https://github.com/gsistelos/restful-api/tree/main/mongodb) to start a mongodb container and test the API

Run `npm start`

## TL;DR Documentation

You need Authorization header with the token to make any request

### GET method examples:

Returns all users: `GET http://localhost:8080/api/users`

Returns all users with name "gsistelos": `GET http://localhost:8080/api/users?username=gsistelos`

Returns all users with email "gabrielsistelos@gmail.com": `GET http://localhost:8080/api/users?email=gabrielsistelos@gmail.com`

You can use any user field (username, email, password, createdAt, updatedAt, _id, __v) and you can mix queries

You can also search by id like this: `GET http://localhost:8080/api/users/<id>`

### POST method examples:

Creates a new user: `POST http://localhost:8080/api/users`

The data for the new user is the request body, that should look like this:
```json
{
  "username": "gsistelos",
  "email": "gabrielsistelos@gmail.com",
  "password": "test123"
}
```

### PATCH method examples:

Updates a user field: `PATCH http://localhost:8080/api/users/<id>`

The data to update the user is the request body, that should look like this:
```json
{
  "password": "new_password"
}
```

Any field can be updated

### DELETE method examples:

Deletes a user: `DELETE http://localhost:8080/api/users/<id>`
