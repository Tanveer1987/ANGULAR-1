
angular.module("MyApp").service("EmployeeService", function($http, $q) {

    this.getEmployees = function() {
        return $q(function(resolve, reject) {
            $http({
                method : 'GET',
                url :  "http://localhost:3000/employees"
            }).then(function(response) {
                resolve(response.data);
            }, function(error) {
                reject(error);
            });
        });
    }

});

