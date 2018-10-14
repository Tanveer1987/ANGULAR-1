angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, $location, $log, $window) {

 

    $scope.run = function() {
        
        $log.info($location);

        $log.info($location.absUrl());
        $log.info($location.host());
        $log.info($location.path());
        $log.info($location.port());
        $log.info($location.protocol());
        $log.info($location.url());

        $log.info($window);
        $window.alert("Hello ");
    }

});