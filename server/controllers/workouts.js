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
