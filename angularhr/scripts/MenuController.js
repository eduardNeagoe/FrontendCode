/**
 * Created by Eduard on 24.06.2016.
 */
hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
             label: "OtherScope",
             url: "view/childscope.html"
        }
    ];
}]);