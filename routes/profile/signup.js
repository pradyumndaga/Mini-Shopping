const express = require('express');
const Profile = require('../../models/profile');
const signUpRouter = express.Router()

signUpRouter.post('/', async (req, res, next) => {
    try {
        const profile = new Profile({
            name: req.body.name,
            address: req.body.address,
            mobile: req.body.mobile,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin,
            orderHistory: req.body.orders,
        })
        const newProfile = profile.save()
        res.send(JSON.stringify(newProfile))
    } catch {
        res.send(JSON.stringify({ error: 'Error while signing up!' }))
    }
})


module.exports = signUpRouter;