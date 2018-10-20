angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, $http) {
    $http({
        method : 'GET',
        url :  "http://localhost:3000/employees"
    }).then(function(response) {
        $scope.employees = response.data;  
    }, function( error ) {
        $scope.employees = [];
    });
});


