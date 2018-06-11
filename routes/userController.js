const express = require('express');
const router = express.Router();
const User = require('../models/User')

// sign up route
router.get('/new', (req, res) => {
    res.render('user/new');
});

router.post('/', (req, res) => {
    const user = req.body;
    User
        .create(user)
        .then((user) => {
            res.redirect('/user/' + user._id);
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
            res.redirect('/');
        });
});

module.exports = router;
