const express = require("express");

const User = require('../models/user');

const router = express.Router(); // creates a router from express.

router.post('/register', async (req, res) => { // makes a post when the '/register' is used on the route.
    try {
        const user = await User.create(req.body); // this will create the new user.

        return res.send(user); // this will show the user!
    } catch (err) {
        return res.status(400).send("[Error] - Registration failed!") & console.log('[Error] - Registration failed!'); // this will catch anny errors and show on screen.
    }
});

module.exports = app => app.use('/auth', router); // this will recover the app from index.js, and returns app.use() that will use our "router" that gets "/register" from a prefix named "/auth".