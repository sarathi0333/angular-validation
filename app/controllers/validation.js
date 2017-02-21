angular.module('validate',[])
.controller('validateCtrl',function($scope) {
    console.log("hello ctrl");

    $scope.submitForm = function () {
         // Set the 'submitted' flag to true
         $scope.submitted = true;
         if ($scope.details.$valid) {
             alert("Form is valid!");
            } else {
                alert("Please correct errors!");
            }
    };
});