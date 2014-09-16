(function(){
  'use strict';

  angular.module('jacker')
  .controller('LiftsCtrl', ['$scope', '$interval', 'Lift', function($scope, $interval, Lift){
    $scope.page = 'Add A Lift';

  }]);
})();

