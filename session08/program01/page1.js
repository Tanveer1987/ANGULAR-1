angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, EmployeeService) {


    $scope.employees = EmployeeService.getEmployees();
    
 
});