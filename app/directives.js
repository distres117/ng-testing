angular.module('app')
.directive('inlineDir', function(){
  return {
    template: '<div ng-class="{active: num===key}" ng-repeat="num in nums"><span>{{num}}</span></div>',
    controller: function($scope){
      $scope.nums = [1,2,3,4];
    }
  };
});
