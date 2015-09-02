var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Superhero = new Schema(
  {
    name: String,
    ability: String,
    nemesis: String
  }
);

module.exports = mongoose.model('superheros', Superhero);

mongoose.connect('mongodb://heroku_zd85p5cz:3qgm1udb8ttpqk1bfd7b78q0hh@ds035563.mongolab.com:35563/heroku_zd85p5cz');
