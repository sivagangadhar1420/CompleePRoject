const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Registration = new Schema({
    hotelcode: {
      type: String
    },
    hotelname: {
      type: String
    },
    hotellocation: {
      type: String
    }
  },{
      collection: 'registration'
  });

  module.exports = mongoose.model('Registration', Registration);
