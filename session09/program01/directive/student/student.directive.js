
angular.module("MyApp").directive("superStudent", function() {

    return  {
        templateUrl : './directive/student/student.directive.html',
        restrict : 'AECM',
        replace : true,
        scope : {
            name : '=',
            age : '='
        }
    };
});