angular.module("MyApp", []);

angular.module("MyApp").controller("MainCtrl", function($scope, $log) {

    $log.log("Log Message 00000");
    $log.debug("Log Message 4");

    $scope.logMe = function() {
        $log.log("Log Message 1");
        $log.info("Log Message 2");
        $log.warn("Log Message 3");
        $log.debug("Log Message 4");
        $log.error("Log Message 5");
    }

});