const express = require('express')
const Profile = require('../../models/profile')
const loginRouter = express.Router()
const bcrypt = require('bcryptjs');

loginRouter.post('/', async (req, res, next) => {
    try {
        const user = await Profile.findOne({ email: req.body.email })
        console.log(user.password)
        console.log(req.body.password)
        const passwordMatch = bcrypt.compare(req.body.password, user.password)
        if (passwordMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save();
            console.log(req.session)
            res.send(JSON.stringify({ message: 'User loggedIn!!' }))
        } else {
            res.send(JSON.stringify({ message: 'Login Failed' }))
        }
    } catch {
        res.send(JSON.stringify({ error: err }));
    }
})

module.exports = loginRouter