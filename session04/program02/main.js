<<<<<<< HEAD
angular.module("MyApp").controller('MyController', function($scope, $timeout, $location, $sce, $interval, $log, $filter) {

    $scope.contact = {
        name : '',
        email : '',
        gender : 'Male',
        maritalStatus : 'Single',
        address : '',
        country : 'India'
    };
 
});
=======

// Creating a module
angular.module("MyApplication", ["ngSanitize"]);


angular
    .module("MyApplication")
    .controller("HomeController", function($scope) {

        $scope.data = "<a href='http://www.google.co.in'> goto Google </a> This site and all of its " + 
        "contents are referring to <strong>AngularJS</strong> (version 1.x), if you are looking for the" + 
        " latest <strong>Angular</strong>";

});




>>>>>>> 718c5faec1b71da01a9ae82d40b69f247c1e5b21
