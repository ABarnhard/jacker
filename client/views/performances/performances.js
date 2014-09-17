(function(){
  'use strict';

  angular.module('jacker')
  .controller('PerformancesCtrl', ['$scope', 'Workout', 'Goal', function($scope, Workout, Goal){
    $scope.page = 'Check Your Progress';
    $scope.date = new Date();





    $scope.getData = function(){
      Workout.findDailyWorkout($scope.date).then(function(res){
        $scope.workout = res.data.workout;
        Goal.findDailyGoal($scope.date).then(function(res){
          $scope.goal = res.data.goal;

          if($scope.goal && $scope.workout){
            if($scope.goal.lifts.length <= $scope.workout.lifts.length){
              $scope.resultImage = 'http://www.hivehealthmedia.com/wp-content/uploads/2013/02/weightlifting-humor.jpg';
            }else{
              $scope.resultImage = 'http://www.redorbit.com/media/uploads/2012/10/stk327129rkn-617x416.jpg';
            }
          }
        });
      });
    };

    $scope.getData();

  }]);
})();

