/**
 * Created by Eduard on 24.06.2016.
 */
hrApp.controller('DescriptionController', ['$rootScope', '$scope', function($rootScope, $scope){

    $scope.title  =  'Two Way Binding Demo';
    $scope.childTemplate = 'view/childscope.html';
    $scope.resetFirstVariable = function(){

        $scope.firstVariable = undefined;
    }
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    }
    
    $scope.descriptionShow =true;
    $scope.toggleDescriptionShow = function(){
        $scope.descriptionShow = !$scope.descriptionShow;
    }
}]);