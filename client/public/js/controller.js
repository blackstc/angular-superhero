angular.module("myApp").controller("addSuperheroController", ["$scope",  function($scope) {

  $scope.superheros = [
    {name: 'batman'},
    {name: 'superman'},
    {name: 'ironman'}
  ];

  $scope.addSuperhero = function() {
    $scope.superheros.push({name: $scope.newSuperhero.name});
  };
}]);
