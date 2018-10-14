
angular.module("MyApplication", []);



angular.module("MyApplication").controller("HomeController", function($scope) {

    $scope.employees = [
        {firstName : 'Sara', gender : 'Female', age : 25, salary : 30000, designation : 'Programmer', isActive : true},
        {firstName : 'Potter', gender : 'Male', age : 28, salary : 20000, designation : 'Developer', isActive : false},
        {firstName : 'Harry', gender : 'Male', age : 52, salary : 45000, designation : 'Manager', isActive : true}
    ];
    
});