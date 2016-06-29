/**
 * Created by Eduard on 27.06.2016.
 */
hrApp.controller('UserController', ['$scope', '$rootScope','$location','UserService', function ($scope, $rootScope, $location, UserService) {

    $scope.back = function(){
        $location.url('/');
    }
    //



        $scope.saveUsers = function() {
           $scope.usersDetailsList = UserService;
            console.log($scope.firstName);
            console.log($scope.usersDetailsList.f);
            alert("Your personal information has been saved successfully !");

        }

    $scope.reset = function(){
        $scope.firstName = undefined;
        $scope.lastName = undefined;
        $scope.cnp = undefined;
        $scope.age = undefined;
        $scope.id = undefined;
    }

}]);