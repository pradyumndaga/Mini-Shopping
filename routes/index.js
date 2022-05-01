const express = require('express');

indexRouter = express.Router()

indexRouter.get('/', (req, res, next) => {
    res.send(JSON.stringify({
        text: 'This is the index'
    }));
});
module.exports = indexRouter
