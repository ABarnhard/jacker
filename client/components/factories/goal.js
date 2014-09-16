(function(){
  'use strict';

  angular.module('jacker')
  .factory('Goal', ['$http', function($http){

    function all(){
      return $http.get('/goals');
    }

    function create(goal){
      return $http.post('/goals', goal);
    }

    return {all:all, create:create};
  }]);
})();

