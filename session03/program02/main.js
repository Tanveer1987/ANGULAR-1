
angular.module("MyApplication", []);

angular.module("MyApplication").filter("salutation", function(){
    return function(firstName, gender) {
       /* if(gender == 'Male')
            return "Mr. " + firstName;
        else
            return "Ms. " + firstName; */

        return ((gender == 'Male') ? "Mr. " : "Ms. ") + firstName;
    }
});


angular.module("MyApplication").service("DataService", function(){
    var employeeList =  [
        {firstName : 'Sara', gender : 'Female', age : 25, salary : 30000, designation : 'Programmer', isActive : true},
        {firstName : 'Potter', gender : 'Male', age : 28, salary : 20000, designation : 'Developer', isActive : false},
        {firstName : 'Harry', gender : 'Male', age : 24, salary : 15000, designation : 'Programmer', isActive : true},
        {firstName : 'Mary', gender : 'Female', age : 27, salary : 95000, designation : 'Programmer', isActive : true},
        {firstName : 'Jhon', gender : 'Male', age : 26, salary : 4000, designation : 'Programmer', isActive : false},
        {firstName : 'Jhonson', gender : 'Male', age : 12, salary : 25000, designation : 'Tester', isActive : true},
        {firstName : 'Mark', gender : 'Male', age : 51, salary : 17000, designation : 'Tester', isActive : true},
        {firstName : 'Charlie', gender : 'Male', age : 42, salary : 46000, designation : 'Tester', isActive : false},
        {firstName : 'Vicky', gender : 'Male', age : 35, salary : 75000, designation : 'Tester', isActive : true}
     ];

     this.getEmployeeList = function() {
         return employeeList;
     }


});


angular.module("MyApplication").controller("HomeController", function($scope, DataService) {
    $scope.searchEmployee = {};
    $scope.orderByColumn = '';
    $scope.noOfRecords = 5;

    $scope.employees = DataService.getEmployeeList();
    
});