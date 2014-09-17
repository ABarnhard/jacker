'use strict';

var Workout = require('../models/workout');

exports.create = function(req, res){
  Workout.create(req.body, req.user, function(err, workout){
    res.send({workout:workout});
  });
};

exports.index = function(req, res){
  Workout.all(req.user, function(err, workouts){
    res.send({workouts:workouts});
  });
};

exports.find = function(req, res){
  var date = new Date(req.params.date);
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  Workout.findDaily(req.user._id, date, function(err, workout){
    res.send({workout:workout});
  });
};
