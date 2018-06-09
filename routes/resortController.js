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

router.get('/new', (req, res) => {
    res.render('resort/new');
});
  
router.post('/', (req, res) => {
    const newResort = req.body;
    Resort
        .create(newResort)
        .then(() => {
            res.redirect('/resort');
        });
});

router.get('/:id', (req, res) => {
    Resort
        .findById(req.params.id)
        .then((resort) => {
            res.render('resort/show', { resort })
        })
});

router.get('/:id/edit', (req, res) => {
    Resort
      .findById(req.params.id)
      .then((resort) => {
        res.render('resort/edit', { resort: resort });
      });
  })
  
router.put('/:id', (req, res) => {
    Resort.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
        res.redirect(`/resort/${req.params.id}`);
    });
});

router.delete('/:id', (req, res) => {
    Resort.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/resort');
        })
});

module.exports = router;
