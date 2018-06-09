const express = require('express')
const router = express.Router({ mergeParams: true })
const Resort = require('../models/Resort')
const Activity = require('../models/Activity')
const User = require('../models/User')

router.get('/', (req, res, next) => {
  Resort.findById(req.params.resortId)
    .then((resort) => {
      const activities = resort.activities
      res.render('activity/index', {
        activities
      })
    })
});

module.exports = router;