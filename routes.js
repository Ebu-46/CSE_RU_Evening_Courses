module.exports = function(app) {
    var control = require('./control');
  
    // todoList Routes
    app.route('/availableCourses')
      .post(control.create_a_task)
      .get(control.get_all_tasks);
    app.route('/availableCourses/:id')
    .delete(control.delete_task)
    .put(control.update_task);

    app.route('/courseDetails')
    .post(control.create_Details)
    .get(control.get_Details);
    app.route('/courseDetails/:id')
    .delete(control.delete_Details)
    .put(control.update_Details);
    
  };
  