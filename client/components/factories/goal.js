(function(){
  'use strict';

  angular.module('jacker')
  .factory('Goal', ['$http', function($http){


    function findDailyGoal(date){
      return $http.get('/goals/' + date);
    }

    function all(){
      return $http.get('/goals');
    }

    function create(goal){
      return $http.post('/goals', goal);
    }

    return {all:all, create:create, findDailyGoal:findDailyGoal};
  }]);
})();

