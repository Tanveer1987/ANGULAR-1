angular.module("MyApp").service('FriendsService', function ($http, $q) {

    this.getFriendsList = function () {

        var deferred = $q.defer();

        /* $http.get('http://localhost:3000/friends')
            .then(function (response) {
                console.log(response);
                deferred.resolve(response.data);
            }, function (error) {
                deferred.reject(error);
            }); */
        deferred.resolve([
            {name : 'Jhon', group : 'Work', imagePath : 'images/img_avatar.png'},
            {name : 'Zara', group : 'College', imagePath : 'images/img_avatar2.png'},
            {name : 'Harry', group : 'Work', imagePath : 'images/img_avatar.png'},
            {name : 'Sara', group : 'College', imagePath : 'images/img_avatar2.png'},
            {name : 'Jhonson', group : 'School', imagePath : 'images/img_avatar.png'},
            {name : 'Tara', group : 'Family', imagePath : 'images/img_avatar2.png'}
        ])
        
        return deferred.promise;
    }

   
});