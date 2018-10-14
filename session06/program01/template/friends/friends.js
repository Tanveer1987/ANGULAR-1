angular.module("MyApp").controller('FriendsController', function($scope, FriendsService) {
    
    FriendsService.getFriendsList().then(function(response){
        $scope.friendsList = response;
    }, function(error){
        $scope.friendsList = [];
    });


});