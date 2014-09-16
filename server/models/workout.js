'use strict';

var Mongo = require('mongodb');

function Workout(o, user){
  this.name   = o.name;
  this.date   = new Date(o.date);
  this.userId = user._id;
  this.liftId = Mongo.ObjectID(o.liftId);
}

Object.defineProperty(Workout, 'collection', {
  get: function(){return global.mongodb.collection('workouts');}
});

Workout.create = function(o, cb){
  var w = new Workout(o);
  Workout.collection.save(w, cb);
};

Workout.all = function(user, cb){
  Workout.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Workout;

