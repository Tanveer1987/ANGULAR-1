angular.module("MyApp").controller('HomeController', function($scope, FriendsService) {
    FriendsService.getFriendsList().then(function(response){
        console.log(response);
        $scope.friendsList = response;
    }, function(error){
        $scope.friendsList = [];
    });

});