angular.module("myApp").controller("addSuperheroController", ["$scope", "$http",
function($scope, $http) {

  //get request to grab all superheros in the database
  $scope.getSuperheros = function() {
    $http.get('/api/v1/superheros')
    .success(function(data) {
      $scope.superheros = data;
    });
  };

  //call function initially on page load to show all  heros currently in the database
  $scope.getSuperheros();


  //function to add new superhero
  $scope.addSuperhero = function() {
    $http.post('/api/v1/superheros', $scope.newSuperhero)
    .success(function(data) {
      $scope.superheros = data;

      //call getSuperheros again after adding new superhero to the db
      $scope.getSuperheros();

      //clean the form when reseting the inputs
      $scope.addForm.$setPristine();

      //reset the form so nothing is in the inputs
      $scope.newSuperhero = {};

      //focus the first input on the page after submit
      $('#first').focus();
    });
  };

  //function to delete hero whose button was clicked
  $scope.deleteSuperhero = function() {
    //get the id of the superhero who was clicked to be deleted
    var id = this.superhero._id;
    $http.delete('api/v1/superhero/' + id)
    .success(function(data) {
      $scope.getSuperheros();
    });
  };

  //function to edit the superhero
  $scope.editSuperhero = function() {
    var id = this.superhero._id;

    //when edit button is clicked, add the data of the superhero to the input fields and delete the superhero from the database, because when the user clicks save, the new superhero will be added back with edited details
    $scope.newSuperhero.name = this.superhero.name;
    $scope.newSuperhero.ability = this.superhero.ability;
    $scope.newSuperhero.nemesis = this.superhero.nemesis;
    $("#first").focus();
    $http.delete('api/v1/superhero/' + id)
    .success(function(data) {
    });
  };
}]);
