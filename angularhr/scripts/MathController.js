/**
 * Created by Eduard on 24.06.2016.
 */
hrApp.controller('MathController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.addition = function(a,b){
         return (parseInt(a) + parseInt(b))
    }
    $scope.substraction = function(a,b){
         return (parseInt(a) - parseInt(b));
    }
    $scope.multiplication = function(a,b){
         return (parseInt(a) * parseInt(b));
    }
    $scope.division = function(a,b){
         return (parseInt(a) / parseInt(b));
    }
}]);