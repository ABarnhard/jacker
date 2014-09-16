'use strict';

var Mongo = require('mongodb');

function Goal(o, user){
  this.name   = o.name;
  this.date   = new Date(o.date);
  this.userId = user._id;
  this.lifts  = convertLifts(o.lifts);
}

Object.defineProperty(Goal, 'collection', {
  get: function(){return global.mongodb.collection('goals');}
});

Goal.create = function(o, user, cb){
  var g = new Goal(o, user);
  Goal.collection.save(g, cb);
};

Goal.all = function(user, cb){
  Goal.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Goal;

// HELPER FUNTION
function convertLifts(lifts){
  var newLifts = lifts.map(function(l){
    l.liftId = Mongo.ObjectID(l.liftId);
    l.sets = parseInt(l.sets);
    l.reps = parseInt(l.reps);
    l.weight = parseFloat(l.weight);
    return l;
  });

  return newLifts;
}
