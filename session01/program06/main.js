

angular.module('MyApplication', []);

angular.module('MyApplication').controller('MainController', function($scope) { 
    $scope.displayContent = false;
    $scope.technologies = ['HTML', 'CSS', 'JS', 'Bootstrap', 'Angular JS', 'Express JS'];
    $scope.onButtonClick = function() {
        $scope.displayContent = !$scope.displayContent;
    }
});

