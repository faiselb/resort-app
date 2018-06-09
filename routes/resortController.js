const express = require('express');
const router = express.Router();
const Resort = require('../models/Resort');

router.get('/', (req, res, next) => {
    Resort.find()
    .then((resorts) => {
      res.render('resort/index', { resorts: resorts });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
