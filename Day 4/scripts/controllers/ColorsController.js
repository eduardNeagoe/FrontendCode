/**
 * Created by Eduard on 28.06.2016.
 */
hrApp.controller('ColorsController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted"
        },
        {
            "text" : "primary",
            "class": "text-primary"
        },
        {
            "text" : "success",
            "class": "text-success"
        },
        {
            "text" : "info",
            "class": "text-info"
        },
        {
            "text" : "warning",
            "class": "text-warning"
        },
        {
            "text" : "danger",
            "class": "text-danger"
        },
        {
            "text" : "Test functionare grup",
            "class": "text-danger"
        }
    ];
    // $scope.selectedColorClass = undefined;
    $scope.changeColor = function(){
        $scope.selectedColorClass = $scope.selectedText.class;
        // console.log($scope.selectedText);
        console.log($scope.selectedColorClass);
        // return $scope.selectedColorClass;
    }

}]);