var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DetailsSchema = new Schema({
    courseId:{
        type: String,
        required : true
    },
    totalNumberOfSeat: {
      type: String,
      required : true
    },
    availableSeat:{
        type: Number,
    },
    courseFee:{
        type: Number,
        required: true
    },
    details:{
        type :String
    }
  });
  
  module.exports = mongoose.model('Details', DetailsSchema);