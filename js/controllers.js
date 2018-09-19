var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', 
  function MyController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
      $scope.people = response.data;
      $scope.peopleOrder = 'name';
  });
});

myControllers.controller('DetailsController', 
function MyController($scope, $http, $routeParams) {
  $http.get('js/data.json').then(function(response) {
    $scope.people = response.data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.people.length - 1;
    }

    if ($routeParams.itemId < $scope.people.length-1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }

});
});