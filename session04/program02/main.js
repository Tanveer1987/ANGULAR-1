
// Creating a module
angular.module("MyApplication", ["ngSanitize"]);


angular
    .module("MyApplication")
    .controller("HomeController", function($scope) {

        $scope.data = "<a href='http://www.google.co.in'> goto Google </a> This site and all of its " + 
        "contents are referring to <strong>AngularJS</strong> (version 1.x), if you are looking for the" + 
        " latest <strong>Angular</strong>";

});




