(function(){
  'use strict';

  angular.module('jacker')
  .factory('Workout', ['$http', function($http){

    function all(){
      return $http.get('/workouts');
    }

    function create(workout){
      return $http.post('/workouts', workout);
    }

    return {all:all, create:create};
  }]);
})();

