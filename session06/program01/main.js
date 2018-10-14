angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope) {


    $scope.firstName = "";
    $scope.lastName = "";

    $scope.makeFullName = function() {
        $scope.fullName = $scope.firstName + " " + $scope.lastName;
    };


});