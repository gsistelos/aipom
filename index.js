require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello from API!'
    });
});
 
app.get('/user', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).send({
            error: `No name sent!`
        });
    }

    res.status(200).send({
        message: `Hello ${name}!`
    });
});

app.post('/secret', (req, res) => {
    const { name } = req.body;
    const { secret } = req.body;

    if (!name) {
        return res.status(400).send({
            error: `No name sent!`
        });
    }

    if (!secret) {
        return res.status(400).send({
            error: `No secret sent!`
        });
    }

    res.status(200).send({
        message: `${name}, your secret "${secret}" was sent to the server!`
    });
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
