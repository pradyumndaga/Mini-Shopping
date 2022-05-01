const express = require('express')
const Products = require('../../models/products')
const Orders = require('../../models/orders')
ordersRouter = express.Router()

ordersRouter.get('/', async (req, res, next) => {
    try {
        const orders = await Orders.find();
        res.send(JSON.stringify(orders))
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching orders!' }));
    }
});

ordersRouter.get('/:id', async (req, res, next) => {
    try {
        const orders = await Orders.findById(req.params.id);
        res.send(JSON.stringify(orders))
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching orders!' }));
    }
});

ordersRouter.post('/', async (req, res, next) => {
    const order = await new Orders({
        products: [{
            _id: req.body.productId,
            quantity: 2,
        }]
    })
    try {
        const newOrder = await order.save()
        res.send(JSON.stringify(newOrder))
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching orders!' }));
    }
})


module.exports = ordersRouter