/**
 * Created by Eduard on 29.06.2016.
 */
hrApp.controller('JobEditController',
    function($scope, $http, $location, CommonResourcesFactoryBackup, JobsService, EmployeeService, DepartmentsService,$routeParams) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        //
        //TODO #HR1



        JobsService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at jobs/findOne: " + err);
            });
        /**
         * Reset form
         */

        $scope.resetJob = function () {
            this.job = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        // $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
    });