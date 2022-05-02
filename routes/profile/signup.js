const express = require('express');
const Profile = require('../../models/profile');
const bcrypt = require('bcryptjs')
const signUpRouter = express.Router()

signUpRouter.post('/', async (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, 12).then(password => {
            const profile = new Profile({
                name: req.body.name,
                address: req.body.address,
                mobile: req.body.mobile,
                email: req.body.email,
                password: password,
                isAdmin: req.body.isAdmin,
                orderHistory: req.body.orders,
            })
            const newProfile = profile.save()
            res.send(JSON.stringify(newProfile))
        })
    } catch {
        res.send(JSON.stringify({ error: 'Error while signing up!' }))
    }
})


module.exports = signUpRouter;