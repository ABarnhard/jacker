'use strict';

var Lift = require('../models/lift');

exports.create = function(req, res){
  Lift.create(req.body, function(err, lift){
    res.send({lift:lift});
  });
};

exports.index = function(req, res){
  Lift.all(req.user, function(err, lifts){
    res.send({lifts:lifts});
  });
};
