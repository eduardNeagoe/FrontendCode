/**
 * Created by Eduard on 24.06.2016.
 */
hrApp.controller('OtherController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.setTitle = function () {
         $scope.title = "New Title";
    }
}]);