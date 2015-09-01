var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

router.get('/', function(req, res) {
  Superhero.find(function(err, superheros){
    // console.log(superheros);
    res.json(superheros);
  });
});

// post ALL superheros
router.post('/', function(req, res) {
  // new Superhero({name: req.body.superheroName})
  new Superhero(req.body.name)
  .save(function(err, superhero) {
    // console.log(superhero);
    res.json({message: 'Success!'});
  });
});


router.get('/superhero/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Superhero.findOne(query, function(err, superhero){
    res.render(
      'superhero',
      {title : 'Superhero API - ' + superhero.name, superhero : superhero}
    );
  });
});


router.put('/superhero/:id', function(req, res) {
  var query = {"_id": req.params.id};
  var update = {name : req.body.name};
  var options = {new: true};
  Superhero.findOneAndUpdate(query, update, options, function(err, superhero){
    res.render(
      'superhero',
      {title : 'Superhero API - ' + superhero.name, superhero : superhero}
    );
  });
});

router.delete('/superhero/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Superhero.findOneAndRemove(query, function(err, superhero){
    res.redirect('/api/superheros');
  });
});

module.exports = router;
