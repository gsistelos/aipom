const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

const usersRouter = require("./routers/usersRouter");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Failed to connect to the database:", err);
  });
