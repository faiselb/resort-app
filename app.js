const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

require('dotenv').config();
const indexRouter = require('./routes/index');
const userController = require('./routes/userController');
const activityController = require('./routes/activityController');
const resortController = require('./routes/resortController');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('connected to database.');
})
.catch((err) => {
    console.log('Error connecting to database', err);
});

app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);
app.use('/resort', resortController);
app.use('/resort/:resortId/activity', activityController);
app.use('/user', userController);

module.exports = app;