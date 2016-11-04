var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userDetailsScehma = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('UserDetails',userDetailsScehma);
