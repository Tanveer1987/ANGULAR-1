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