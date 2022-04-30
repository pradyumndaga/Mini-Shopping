const express = require('express');

productRouter = express.Router()

productRouter.use('/product', (req, res, next) => {
    res.send(JSON.stringify({
        name: 'PRODUCT 1',
        description: 'This is the first product!!',
        price: 200,
    }));
});
module.exports = productRouter
