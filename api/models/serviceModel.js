var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  serviceID: {type: Number, required: true},
  name: {type: String, required: true}
});

module.exports = mongoose.model('Services', 'ServiceSchema');
