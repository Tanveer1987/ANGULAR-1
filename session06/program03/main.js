angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope) {

  

  $scope.applyStyle = function() {
    $scope.txtBoxStyle = {'background-color': 'yellow'};
  };

  $scope.removeStyle = function() {
    $scope.txtBoxStyle = {};
  };

});