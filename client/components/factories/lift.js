(function(){
  'use strict';

  angular.module('jacker')
  .factory('Lift', ['$http', function($http){

    function all(){
      return $http.get('/lifts');
    }

    function create(lift){
      return $http.post('/lifts', {name:lift});
    }

    return {all:all, create:create};
  }]);
})();

