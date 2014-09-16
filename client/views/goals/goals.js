(function(){
  'use strict';

  angular.module('jacker')
  .controller('GoalsCtrl', ['$scope', 'Goal', 'Lift', function($scope, Goal, Lift){
    $scope.page = 'Add A Workout Goal';
    $scope.goals = [];
    $scope.lifts = [];
    $scope.goal = {lifts:[]};

    Lift.all().then(function(res){
      $scope.lifts = res.data.lifts;
    });

    Goal.all().then(function(res){
      $scope.goals = res.data.goals;
    });

    $scope.addLift = function(){
      var name = _.findWhere($scope.lifts, {_id:$scope.lift.liftId}).name;
      $scope.lift.name = name;
      $scope.goal.lifts.push($scope.lift);
      $scope.lift = {};
    };

    $scope.addGoal = function(){
      var name = _.findWhere($scope.lifts, {_id:$scope.lift.liftId}).name;
      $scope.lift.name = name;
      $scope.goal.lifts.push($scope.lift);
      Goal.create($scope.goal).then(function(res){
        $scope.goals.push(res.data.goal);
        $scope.goal = {lifts:[]};
        $scope.lift = {};
      });
    };

  }]);
})();

