/**
 * Created by Eduard on 29.06.2016.
 */
hrApp.controller('JobViewController', ['$scope' , '$http', '$location','$routeParams','JobsService', function ($scope, $http, $location, JobsService, $routeParams) {
    JobsService.findById($routeParams.jobId)
        .then(function (res) {
            $scope.job = res.data;
        }, function (err) {
            console.log("Error at employees/findOne: " + err);
        });
}]);