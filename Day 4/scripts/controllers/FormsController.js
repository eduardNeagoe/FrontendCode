/**
 * Created by Eduard on 28.06.2016.
 */
hrApp.controller('FormsController',['$scope', '$rootScope', function($scope, $rootScope){
    $scope.submitForm = function () {
        console.log($scope.myForm);
        // if($scope.myForm.$valid == true){
        //
        //     console.log('Valid form:'+$scope.myForm.$valid);
        //
        // }
        alert('Valid form:'+$scope.myForm.$valid);

    }
}]);