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

router.post('/', (req, res) => {
    const newUser = req.body;
    User
        .create(newUser)
        .then(() => {
            res.redirect('/user');
        });
});

router.get('/:id', (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => {
            res.render('user/show', { user: user });
        });
});

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/user');
        });
});

module.exports = router;
