'use strict';

var Lift = require('../models/lift');

exports.create = function(req, res){
  req.body.userId = req.user._id;
  Lift.create(req.body, function(err, lift){
    res.send({lift:lift});
  });
};

exports.index = function(req, res){
  Lift.all(req.user, function(err, lifts){
    res.send({lifts:lifts});
  });
};
