'use strict';

var Workout = require('../models/workout');

exports.create = function(req, res){
  Workout.create(req.body, function(err, workout){
    res.send({workout:workout});
  });
};

exports.index = function(req, res){
  Workout.all(function(err, workouts){
    res.send({workouts:workouts});
  });
};
