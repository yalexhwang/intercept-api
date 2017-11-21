var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
  name: {type: String, required: true},
  website: {type: String, required: true},
  missionStatement: {type: String},
  hotline: {
    number: {type: String},
    note: {type: String},
    is24Hrs: {type: Boolean}
  },
  service: {
    directService: {type: boolean, required: true}
    serviceID: [{type: Number, required: true}],
    serviceNote: [{
      serviceID: {type: Number},
      note: {type: String},
    }],
    area: {type: String}
  },
  populations: [{type: Number, required: true}],
  location: {
    address: {
      street: {type: String},
      city: {type: String},
      state: {type: String},
      country: {type: String},
    },
    geolocation: {
      isActualLocation: {type: Boolean, required: true},
      type: {type: String},
      lat: {type: String},
      lng: {type: String}
    },
  },
  contactInfo: {
    email: {type: String, required: true},
    phoneNumbers: [{type: String, required: true}]
  },
  languages: [{type: String}]
});

module.exports = mongoose.model('Organizations', 'OrganizationSchema');
