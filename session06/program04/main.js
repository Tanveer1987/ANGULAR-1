angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope) {


    $scope.employees = [
        {'name':'Sachin', 'salary':28000, 'location':'Mumbai'},
        {'name':'Jhon', 'salary':27000, 'location':'Bangalore'},
        {'name':'Dhoni', 'salary':23000, 'location':'Chennai'},
        {'name':'Peter', 'salary':18000, 'location':'Mumbai'}
    ];
  
 
});