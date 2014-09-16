(function(){
  'use strict';

  angular.module('jacker')
  .factory('Lift', ['$http', function($http){

    function all(){
      return $http.get('/lifts');
    }

    function create(name){
      return $http.post('/lifts', {name:name});
    }

    return {all:all, create:create};
  }]);
})();

