require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const User = require('./User');

app.use(express.json());

app.get('/api/user', async (req, res) => {
    try {
        if (!req.query.username) {
            return res.status(400).send({
                message: 'No username provided'
            });
        }

        const users = await User.find({ username: req.query.username });

        if (users.length === 0) {
            return res.status(404).send({
                message: 'No users found'
            });
        }

        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
});

app.get('/api/user/all', async (req, res) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(404).send({
                message: 'No users found'
            });
        }

        res.status(200).send(users);
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
});

app.post('/api/user/create', async (req, res) => {
    try {
        if (await User.findOne({ email: req.body.email })) {
            return res.status(400).send({
                message: 'User email already in use'
            });
        }

        const user = new User(req.body);

        const err = user.validateSync();

        if (err) {
            return res.status(400).send({
                message: err.message
            });
        }

        await user.save();

        res.status(201).send({
            message: 'User created'
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
});

app.post('/api/user/delete', async (req, res) => {
    try {
        const info = await User.deleteOne({ email: req.body.email, password: req.body.password });

        if (info.deletedCount === 0) {
            return res.status(404).send({
                message: 'User not found'
            });
        }

        res.status(200).send({
            message: 'User deleted'
        });
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
});

mongoose.connect(
    MONGODB_URI
).then(() => {
    console.log('Connected to database');

    app.listen(
        PORT,
        () => console.log(`Running on http://localhost:${PORT}`)
    );
}).catch((err) => {
    console.log('Failed to connect to the database:', err);
});
