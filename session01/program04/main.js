

angular.module('MyApplication', []);

angular.module('MyApplication').controller('MainController', function($scope) { 

    $scope.course = 'Angular JS Training';

    $scope.technologies = ['HTML', 'CSS', 'Javascript', 'Angular JS', 'Angular 6', 'Bootstrap'];

    $scope.student = {
        'name' : 'Sara',
        'gender' : 'Female',
        'course' : 'Javascript',
        'duration' : '4 Months',
        'fees' : 2500,
        'classTime' : '7.00 PM',
        'marks' : [73, 90, 28],
        'contact' : {
            'phone' : '9002312334',
            'email' : 'sara@gmail.com',
            'facebook' : 'www.facebook.com/sara'
        }
    };

    $scope.employees = [
        { id : 'E1', name : 'Jhon', salary : 2500},
        { id : 'E2', name : 'Peter', salary : 2700},
        { id : 'E3', name : 'Sara', salary : 1900}
    ];
});

