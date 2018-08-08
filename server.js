var express = require('express'),
  app = express(),
  port = process.env.PORT || 2000,
  mongoose = require('mongoose'),
  Task = require('./model'), //created model loading here
  Detail= require('./model_details'),
  bodyParser = require('body-parser');
  
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eveningCourses'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes'); //importing route
routes(app); //register the route

app.use(function(err,req,res,next){
  console.log(err);
  res.status(404).send({error: err.message});
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});