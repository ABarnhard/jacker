(function(){
  'use strict';

  angular.module('jacker')
  .controller('WorkoutsCtrl', ['$scope', '$interval', 'Workout', 'Lift', function($scope, $interval, Workout, Lift){
    $scope.page = 'Add A Workout';
    $scope.workouts = [];
    $scope.lifts = [];
    $scope.workout = {lifts:[]};

    Lift.all().then(function(res){
      $scope.lifts = res.data.lifts;
    });

    Workout.all().then(function(res){
      $scope.workouts = res.data.workouts;
    });

    $scope.addLift = function(){
      var name = _.findWhere($scope.lifts, {_id:$scope.lift.liftId}).name;
      $scope.lift.name = name;
      $scope.workout.lifts.push($scope.lift);
      $scope.lift = {};
    };

    $scope.addWorkout = function(){
      var name = _.findWhere($scope.lifts, {_id:$scope.lift.liftId}).name;
      $scope.lift.name = name;
      $scope.workout.lifts.push($scope.lift);
      Workout.create($scope.workout).then(function(res){
        $scope.workouts.push(res.data.workout);
        $scope.workout = {lifts:[]};
        $scope.lift = {};
      });
    };

  }]);
})();

