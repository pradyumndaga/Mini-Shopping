const express = require('express')
const Products = require('../../models/products')
const Orders = require('../../models/orders')
ordersRouter = express.Router()

ordersRouter.get('/', async (req, res, next) => {
    try {
        const order = await new Orders({
            products: [{
                _id: '626e11ab9cf33cdf9773128c',
                quantity: 2,
            }]
        })
        res.send(JSON.stringify(order))
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching orders!' }));
    }
})


module.exports = ordersRouter