angular.module('app')
.directive('inlineDir', function(){
  return {
    template: '<div ng-class="{active: num===key}" ng-repeat="num in nums"><span>{{num}}</span></div>',
    controller: function($scope){
      $scope.nums = [1,2,3,4];
    }
  };
})
.directive('templateDir', function(){
    return {
      templateUrl: 'views/tempDir.view.html',
      controller: function($scope){
          $scope.nums = [];
          for (var i = 65;i< 69;i++)
            $scope.nums.push(String.fromCharCode(i));
      }
    };
});
