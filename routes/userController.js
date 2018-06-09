const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res, next) => {
    User.find()
    .then((users) => {
      res.render('user/index', { users: users });
    })
    .catch((err) => res.send(err));
});

// sign up route
router.get('/new', (req, res) => {
    res.render('user/new');
});

module.exports = router;
