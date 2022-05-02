// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products/products')
const ordersRouter = require('./routes/orders/orders')
const signUpRouter = require('./routes/profile/signup')
const loginRouter = require('./routes/profile/login')
const logoutRouter = require('./routes/profile/logout')
const Profile = require('./models/profile')

const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session);
const MONGODB_URI = 'mongodb+srv://pdaga:qwerty123@cluster0.pnwc8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const store = new mongoDBStore({
    uri: MONGODB_URI,
    collection: 'session'
});
const moongose = require('mongoose');
moongose.connect(MONGODB_URI);
const db = moongose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connection Success to Moongose!'))

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
const cors = require('cors');
app.use(cors());
app.use(session({ secret: 'user', resave: false, saveUninitialized: false, store: store }));
app.use((req, res, next) => {
    if (!req.session.user) {
        return next()
    }
    Profile.findById(req.session.user._id).then(user => {
        req.user = user;
        next()
    }).catch(error => {
        console.error(error);
    })
})
app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/orders', ordersRouter);
app.use('/signup', signUpRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.listen(process.env.PORT || 3000);