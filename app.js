const express = require('express');
const path = require('path');

const app = express();

const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);

module.exports = app;