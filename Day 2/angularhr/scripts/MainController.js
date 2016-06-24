/**
 * Created by Eduard on 24.06.2016.
 */
hrApp.controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.name = "Ed";
    alert($scope.name);
}]);

