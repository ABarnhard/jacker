'use strict';

var Mongo = require('mongodb');

function Goal(o, user){
  this.name   = o.name;
  this.date   = new Date(o.date);
  this.userId = user._id;
  this.liftId = Mongo.ObjectID(o.liftId);
}

Object.defineProperty(Goal, 'collection', {
  get: function(){return global.mongodb.collection('goals');}
});

Goal.create = function(o, cb){
  var g = new Goal(o);
  Goal.collection.save(g, cb);
};

Goal.all = function(cb){
  Goal.collection.find().toArray(cb);
};

module.exports = Goal;
