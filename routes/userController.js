const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('user/index', { title: 'Express' });
});

// sign up route
router.get('/new', (req, res) => {
    res.render('user/new')
});

module.exports = router;
