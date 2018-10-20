<<<<<<< HEAD
angular.module("MyApp").controller('MainController', function($scope) {
    console.log("MainController is running");
    $scope.test = "Testing Main Controller";
=======
angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope) {


    $scope.firstName = "";
    $scope.lastName = "";

    $scope.makeFullName = function() {
        $scope.fullName = $scope.firstName + " " + $scope.lastName;
    };


>>>>>>> 718c5faec1b71da01a9ae82d40b69f247c1e5b21
});