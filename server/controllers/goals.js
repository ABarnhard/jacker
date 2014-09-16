'use strict';

var Goal = require('../models/goal');

exports.create = function(req, res){
  Goal.create(req.body, function(err, goal){
    res.send({goal:goal});
  });
};

exports.index = function(req, res){
  Goal.all(req.user, function(err, goals){
    res.send({goals:goals});
  });
};
