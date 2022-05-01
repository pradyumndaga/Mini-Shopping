const mongoose = require('mongoose');
const products = require('./products');

const orderSchema = new mongoose.Schema({
    products: [{
        _id: {
            type:  mongoose.Schema.Types.ObjectId,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        }
    }]
});

module.exports = mongoose.model('Orders', orderSchema);