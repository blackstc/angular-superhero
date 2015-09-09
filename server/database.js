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

// mongoose.connect('mongodb://localhost/node-superhero');

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/node-superhero");
