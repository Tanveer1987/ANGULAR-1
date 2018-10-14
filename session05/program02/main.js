angular.module("MyApp").controller('MyController', function($scope, $timeout, $location, $sce, $interval, $log, $filter) {

    $scope.contactinfo = {
        name : '',
        group : '',
        mobile : '',
        email: '',
        address : '',
        storepath:''
    };
 
});