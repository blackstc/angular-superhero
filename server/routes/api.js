var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Superhero = require('../database');

// get ALL superheros
router.get('/superheros', function(req, res) {
  Superhero.find(function(err, superheros){
    res.json(superheros);
  });
});

// post ALL superheros
router.post('/superheros', function(req, res) {
  new Superhero(req.body)
  .save(function(err, superhero) {
    res.json({message: 'Success!'});
  });
});

// delete for single superhero
router.delete('/superhero/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Superhero.findOneAndRemove(query, function(err, superhero){
    res.json(superhero);
  });
});

module.exports = router;
