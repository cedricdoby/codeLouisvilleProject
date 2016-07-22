var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fortuneSchema = new Schema({
  Fortune: String
});

module.exports=mongoose.model('fortune', fortuneSchema);
