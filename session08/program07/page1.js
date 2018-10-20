angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, EmployeeService) {
  EmployeeService.getEmployees().then(function(data) {
      $scope.employees = data;
  }, function(error) {
      $scope.employees = [];
  });
});

