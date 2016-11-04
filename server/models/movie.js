var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var movieDetailsScehma = new Schema({
  Title: String,
  Year: String,
  imdbID: String,
  Type: String,
  Poster: String
});

module.exports = mongoose.model('movieDetails',movieDetailsScehma);
