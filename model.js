var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    courseId:{
        type: String,
        required : true
    },
    courseName: {
      type: String,
      required : true
    },
    courseOfferingDept:{
        type: String,
        required : true 
    }
      
  });
  
  module.exports = mongoose.model('Tasks', TaskSchema);