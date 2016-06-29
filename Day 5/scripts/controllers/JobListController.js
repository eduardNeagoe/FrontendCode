/**
 * Created by Eduard on 29.06.2016.
 */
hrApp.controller('JobListController', ['$scope' , '$http', '$location','$routeParams','JobsService','CommonResourcesFactoryBackup', function ($scope, $http, $location,  $routeParams, JobsService, CommonResourcesFactoryBackup) {
    JobsService.findAllJobs()
        .then(function (res) {
            $scope.jobs = res.data;
        }, function (err) {
            console.log("Error at jbs/findAllJobs: " + err);
        });

    $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
        .success(function (data, status, headers, config) {
            $scope.jobs = data;
        });

    $scope.viewJob = function (jobId) {
        $location.url('/jobView/' + jobId);
    };

    $scope.editJob = function(jobId) {
        $location.url('/jobEdit/' + jobId);
    };
    $scope.deleteJob = function(jobId){
        
        $http.delete(CommonResourcesFactoryBackup.deleteJobUrl +'/' + jobId)
            .success(function (data) {
                console.log("Deleted!");
                return data;
            })
            .error(function (err) {
                console.log("Error at delete function !");
            });
    }
}]);