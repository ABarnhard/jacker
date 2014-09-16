'use strict';

function Lift(){
}

Object.defineProperty(Lift, 'collection', {
  get: function(){return global.mongodb.collection('lifts');}
});

Lift.create = function(o, cb){
  Lift.collection.save(o, cb);
};

Lift.all = function(user, cb){
  Lift.collection.find({userId:user._id}).toArray(cb);
};

module.exports = Lift;
