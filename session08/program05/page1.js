angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, $http) {

    var employees;
    // Step 1:
    var serverUrl = "http://localhost:3000/employees";

    // Step 2:
    var requestObject = {};
    requestObject.method = 'GET';
    requestObject.url = serverUrl;

    // Step 3:
    var successFunc = function(response) {
        console.log(response);
        $scope.employees = response.data;  
    }

    // Step 4:
    var failureFunc = function( error ) {
        console.log(error);
    } 

    // Step 5:
    $http(requestObject).then(successFunc, failureFunc);

    


    
    
 
});