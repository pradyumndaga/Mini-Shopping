const express = require('express');

indexRouter = express.Router()

indexRouter.use('/', (req, res, next) => {
    res.send(JSON.stringify({
        text: 'This is the index'
    }));
});
module.exports = indexRouter
