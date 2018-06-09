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

router.get('/new', (req, res) => {
    res.render('activity/new', {
        resortId: req.params.resortId
    });
});

router.post('/', (req, res) => {
    const activity = new Activity(req.body);

    Resort.findById(req.params.resortId)
        .then((resort) => {

        resort.activities.push(activity);

        resort.save().then(()=> {
            res.redirect(`/resort/${req.params.resortId}/activity`);
        });
    });
})

  
module.exports = router;