angular.module('MyApp',[]);

angular.module('MyApp').controller('HomeCtrl',  function($scope) {
    var emp = {};
    emp['firstName'] = 'Sachin';
    emp.gender = 'M';
    emp.email = 'sachin@gmail.com';
    emp['salary'] = 2500;
    emp.isActive = true;
    emp.designation = 'Frontend Developer';

    $scope.employee = emp;
}); 