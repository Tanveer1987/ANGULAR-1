angular.module("MyApp").config(function($routeProvider) {
    console.log("Configuration function is running....");
    $routeProvider.when("/", {
        redirectTo : "/home"
    }).when("/home", {
        templateUrl : 'template/home/home.html',
        controller : 'HomeController'
    }).when("/about", {
        templateUrl : 'template/about/about.html',
        controller : 'AboutController'
    }).when("/friends", {
        templateUrl : 'template/friends/friends.html',
        controller : 'FriendsController'
    });
});