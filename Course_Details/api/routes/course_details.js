const express = require('express');
const router = express.Router();


 router.get('/',(req,res,next) => {
     res.status(200).json({
         message : 'get request to course_details '
     });
 });

router.post('/',(req,res,next) => {
    res.status(200).json({
        message : 'post request to course_details'
    });
});

router.patch('/',(req,res,next) => {
    res.status(200).json({
        message : 'update request to course_details'
    });
});

router.delete('/',(req,res,next) => {
    res.status(200).json({
        message : 'delete request to course_details'
    });
});

module.exports = router;