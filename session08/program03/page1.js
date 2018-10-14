angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, $timeout) {

 

    $scope.run = function() {
        $timeout(function() {
            $scope.showMessage = true;
        } , 2000);
    }

});