angular.module("MyModule",[]);

angular.module("MyModule").controller("MainController", function($scope) {

    $scope.jobs = [
        {"title":"Javascript Developer", "experience" : "0-3 years"}, 
        {"title":"AngularJS Developer", "experience" : "0-2 years"},
        {"title":"Angualr 4 Developer", "experience" : "2-3 years"},
        {"title":"HTML & CSS Developer", "experience" : "0-3 years"},
        {"title":"Frontend Developer", "experience" : "3-6 years"},
        {"title":"Java Developer", "experience" : "4-6 years"}
    ];

});