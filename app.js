const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const availableCoursesRoutes = require('./Resource/Available_Courses/availableCourses');
const coursesDetailse = require('./Resource/Course_Details/coursesDetails');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/EveningCourses/AvailableCourses',availableCoursesRoutes);
app.use('/EveningCourses/CoursesDetailse');


module.exports = app;
