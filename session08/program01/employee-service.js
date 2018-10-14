angular.module("MyApp").service("EmployeeService", function() {

    this.getEmployees = function() {
        var employees = [
            {'name':'Sachin', 'salary':28000, 'location':'Mumbai'},
            {'name':'Jhon', 'salary':27000, 'location':'Bangalore'},
            {'name':'Dhoni', 'salary':23000, 'location':'Chennai'},
            {'name':'Peter', 'salary':18000, 'location':'Mumbai'},
            {'name':'Parker', 'salary':28000, 'location':'Chennai'}
        ];

        return employees;
    }

});


angular.module("MyApp").factory("EmployeeFactory", function() {

        var obj = {};

        obj.getEmployees = function() {
            var employees = [
                {'name':'Sachin', 'salary':28000, 'location':'Mumbai'},
                {'name':'Jhon', 'salary':27000, 'location':'Bangalore'},
                {'name':'Dhoni', 'salary':23000, 'location':'Chennai'},
                {'name':'Peter', 'salary':18000, 'location':'Mumbai'},
                {'name':'Parker', 'salary':28000, 'location':'Chennai'}
            ];
             
            return employees;
        }

        return obj;
    
});