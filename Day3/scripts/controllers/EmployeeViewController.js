hrApp.controller('EmployeeViewController', ['$scope', 'commonResourcesFactoryBackup','$http', '$routeParams', '$location',
    function($scope, commonResourcesFactoryBackup,$http, $routeParams, $location) {

        $scope.employee = {};
        // TODO #HR6 get employee by id
            $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeid)
                .success(function(data, status, headers, config){
                    $scope.employee = data;
                })
                .error(function(data,status, headers, config){
                    alert("Error "+status);
                });


        $scope.back = function( ) {
            // TODO back to Employee List page
            $location.url('/employeeslist/');
        }

    }]);