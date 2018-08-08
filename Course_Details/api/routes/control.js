var mongoose = require('mongoose'),
Tasks = mongoose.model('Tasks');
Details=mongoose.model('Details');


exports.create_a_task = function(req, res, next) {
    Tasks.create(req.body)
    
    // .then(function(Tasks){

    //   res.send(Tasks);
    // })
    .then(doc => {
        console.log(doc);
        res.status(200).json({
            message: 'POST request handled 1 item posted',
            createdCourse: {
                _id: doc._id,
                courseId: doc.courseId,
                courseName: doc.courseName,
                courseOfferingDept: doc.courseOfferingDept
            },
            request: {
                type: 'POST',
                url: 'http://localhost:2000/availableCourses/'+ doc._id
            }
        });
    })
    .catch(next);
  };

  
exports.get_all_tasks = function(req, res, next) {
    Tasks.find({})
    // .then(function(Tasks) {
    //  // res.send(Tasks);
    // })
    .exec()
    .then(docs =>{
        res.status(200).json({
            count: docs.length,
            availableCourses: docs.map(doc =>{
                return{
                    _id: doc._id,
                    courseId: doc.courseId,
                    courseName: doc.courseName,
                    courseOfferingDept: doc.courseOfferingDept,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/availableCourses/' + doc._id
                    }
                }
            })
        });
    })
    .catch(next);
  };


 
exports.delete_task = function(req, res, next) {
    Tasks.findOneAndRemove({ _id: req.params.id})
    // .then(function(Tasks) {
    //     res.json(Tasks);
    //   })
    .then(result =>{
        res.status(200).json({
            type: 'DELETE',
            comment: 'successfullly deleted',
            result: result
        });
    })
      .catch(next);
    };

exports.update_task = function(req, res, next) {
    Tasks.findByIdAndUpdate({ _id: req.params.id},req.body).then(function() {
        Tasks.findOne({ _id: req.params.id})
        // .then(function(Tasks){
        //     res.send(Tasks);
        // })
        .then(result =>{
            console.log(result);
            res.status(500).json({
                message: 'PUT or UPDATE request',
                updateCourse: result,
                request: {
                    type: 'POST',
                    url: 'http://localhost:2000/availableCourses/'+ result.id
                }
            });
        })
    })
    .catch(next);
};

exports.create_Details = function(req,res,next){
    Details.create(req.body).then(function(Details){
        res.send(Details);
    }).catch(next);
};
  
exports.get_Details = function(req, res, next) {
    Details.find({}).then(function(Details) {
      res.send(Details);
    }).catch(next);
  };

  
exports.delete_Details = function(req, res, next) {
    Details.findOneAndRemove({ _id: req.params.id})
    .then(result =>{
        res.status(200).json({
            type: 'DELETE',
            comment: 'successfullly deleted',
            result: result
        });
    })
    // .then(function(Details) {
    //     res.json(Details);
    //   }).
      
      .catch(next);
    };

exports.update_Details = function(req, res, next) {
    Details.findByIdAndUpdate({ _id: req.params.id},req.body).then(function() {
        Details.findOne({ _id: req.params.id}).then(function(Details){
            res.send(Details);
        })
    });
};