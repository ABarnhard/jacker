'use strict';

var Goal = require('../models/goal');

exports.create = function(req, res){
  Goal.create(req.body, req.user, function(err, goal){
    res.send({goal:goal});
  });
};

exports.index = function(req, res){
  Goal.all(req.user, function(err, goals){
    res.send({goals:goals});
  });
};

exports.find = function(req, res){
  var date = new Date(req.params.date);
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  Goal.findDaily(req.user._id, date, function(err, goal){
    res.send({goal:goal});
  });
};
