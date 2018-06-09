const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const indexRouter = require('./routes/index');
const userController = require('./routes/userController');
const resortController = require('./routes/resortController');

mongoose.connect('mongodb://localhost/bookingdb')
.then(() => {
    console.log('connected to database.');
})
.catch((err) => {
    console.log('Error connecting to database', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);
app.use('/resort', resortController)
app.use('/user', userController);

module.exports = app;