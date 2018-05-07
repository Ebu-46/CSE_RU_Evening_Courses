const express = require('express');
const app = express();

const course_details_Routes = require('./api/routes/course_details');

app.use('/course_details',course_details_Routes);

module.exports = app;