var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var populationSchema = new Schema({
  populationID: {type: Number, required: true},
  name: {type: String, required: true}
});

module.exports = mongoose.model('Populations', 'populationSchema');
