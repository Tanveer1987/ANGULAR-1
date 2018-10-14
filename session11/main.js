var app = angular.module("App", []);

app.controller("MainController", function($scope) {
    $scope.name = '';

    $scope.onClick = function() {
        console.log("I am clicked" , $scope.dummyForm.firstName);
    }
});