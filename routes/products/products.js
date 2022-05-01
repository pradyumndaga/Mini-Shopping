const express = require('express');

const Products = require('../../models/products')

productRouter = express.Router()

productRouter.get('/', async (req, res, next) => {
    try {
        const products = await Products.find()
        res.send(JSON.stringify(products));
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching products!' }));
    }
});

productRouter.get('/:id', async (req, res, next) => {
    try {
        const products = await Products.findById(req.params.id)
        res.send(JSON.stringify(products));
    } catch {
        res.send(JSON.stringify({ error: 'Error in fetching products!' }));
    }
});

productRouter.post('/', async (req, res, next) => {
    req.body.name = 'PRD'
    const prd = new Products({
        name: req.body.name,
        description: req.body.name + 'Product added successfully',
        price: 200,
    })
    try {
        const newProduct = await prd.save()
        res.send(JSON.stringify(newProduct));
    } catch {
        res.send(JSON.stringify({ error: 'Error in adding product!' }));
    }

});
module.exports = productRouter
