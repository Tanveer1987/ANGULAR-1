angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope) {


    $scope.firstNumber = 0;
    $scope.secondNumber = 0;

    $scope.add = function() {
        $scope.thirdNumber = parseInt($scope.firstNumber) + parseInt($scope.secondNumber);
    };


});