'use strict';

function Lift(){
}

Object.defineProperty(Lift, 'collection', {
  get: function(){return global.mongodb.collection('lifts');}
});

Lift.create = function(o, cb){
  Lift.collection.save(o, cb);
};

Lift.all = function(cb){
  Lift.collection.find().toArray(cb);
};

module.exports = Lift;
