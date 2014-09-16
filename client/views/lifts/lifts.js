(function(){
  'use strict';

  angular.module('jacker')
  .controller('LiftsCtrl', ['$scope', '$interval', 'Lift', function($scope, $interval, Lift){
    $scope.page = 'Add A New Lift';
    $scope.lifts = [];

    Lift.all().then(function(res){
      $scope.lifts = res.data.lifts;
    });

    $scope.addLift = function(){
      Lift.create($scope.name).then(function(res){
        $scope.lifts.push(res.data.lift);
        $scope.name = '';
      });
    };

  }]);
})();

