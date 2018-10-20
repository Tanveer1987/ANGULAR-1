<<<<<<< HEAD
angular.module("MyApp").controller('MyController', function($scope, $timeout, $location, $sce, $interval, $log, $filter) {

    $log.log("Location ", $location);

    $log.log("log");
    $log.info("info");
    $log.warn("warn");
    $log.error("error");
    


    $timeout(function(){
        $scope.firstName = 'Sachin';

        $scope.content = $sce.trustAsHtml("<h2 style='color:red'>Sample text</h2>");

        $scope.text = $sce.trustAsHtml(
        "Protocol :  " + $filter('uppercase')($location.$$protocol) + "<br/>" + 
        "Host : " + $location.$$host +  "<br/>" + 
        "Port  : " + $location.$$port);

        $interval(function(){
            $scope.currentDateAndTime = new Date().toLocaleTimeString();
        }, 1000);    
        
        
     }, 1000);

});
=======

// Creating a module
angular.module("MyApplication", []);


angular
    .module("MyApplication")
    .controller("HomeController", function($scope) {

            $scope.name = "Sachin";

    });




>>>>>>> 718c5faec1b71da01a9ae82d40b69f247c1e5b21
