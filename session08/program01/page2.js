angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, EmployeeFactory) {


     
    $scope.employees = EmployeeFactory.getEmployees();

  
 
});