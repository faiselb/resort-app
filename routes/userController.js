const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('user/index', { title: 'Express' });
});

module.exports = router;
