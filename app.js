// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products/products')
const ordersRouter = require('./routes/orders/orders')

const moongose = require('mongoose');
moongose.connect('mongodb+srv://pdaga:qwerty123@cluster0.pnwc8.mongodb.net/test');
const db = moongose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connection Success to Moongose!'))

app.use(bodyParser.urlencoded({
    extended: false,
}));
const cors = require('cors');
app.use(cors());
app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/orders', ordersRouter);
app.listen(3000);