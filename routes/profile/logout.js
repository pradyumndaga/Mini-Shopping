const express = require('express')
const logoutRouter = express.Router()

logoutRouter.post('/', async (req, res, next) => {
    try {
        await req.session.destroy();
        res.send(JSON.stringify({ message: 'LoggedOut!!' }))
    } catch {
        res.send(JSON.stringify({ message: 'LoggedOut failed!!' }))
    }
})
module.exports = logoutRouter