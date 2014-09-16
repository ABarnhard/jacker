'use strict';

var Mongo = require('mongodb');

function Workout(o, user){
  this.name   = o.name;
  this.date   = new Date(o.date);
  this.userId = user._id;
  this.lifts  = convertLifts(o.lifts);
}

Object.defineProperty(Workout, 'collection', {
  get: function(){return global.mongodb.collection('workouts');}
});

Workout.create = function(o, user, cb){
  var w = new Workout(o, user);
  Workout.collection.save(w, cb);
};

Workout.all = function(user, cb){
  Workout.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Workout;

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
