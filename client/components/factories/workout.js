(function(){
  'use strict';

  angular.module('jacker')
  .factory('Workout', ['$http', function($http){

    function findDailyWorkout(date){
      return $http.get('/workouts/' + date);
    }

    function all(){
      return $http.get('/workouts');
    }

    function create(workout){
      return $http.post('/workouts', workout);
    }

    return {all:all, create:create, findDailyWorkout:findDailyWorkout};
  }]);
})();

