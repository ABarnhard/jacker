(function(){
  'use strict';

  angular.module('jacker')
  .factory('Home', ['$http', function($http){

    function getMessage(){
      return $http.get('/home');
    }

    return {getMessage:getMessage};
  }]);
})();

