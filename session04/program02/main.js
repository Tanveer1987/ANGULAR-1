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