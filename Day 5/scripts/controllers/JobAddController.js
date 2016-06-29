/**
 * Created by Eduard on 29.06.2016.
 */
hrApp.controller('JobAddController',
    function($scope, $http, $location, CommonResourcesFactoryBackup, JobsService, EmployeeService, DepartmentsService,$routeParams) {
        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        //
        //TODO #HR1

        // EmployeeService.findAllJobs()
        //     .then(function (res) {
        //         // console.log(res.data[0]);
        //         $scope.jobs = res.data;
        //     }, function (err) {
        //         console.log("Error at jobs/findAllJobs: " + err);
        //     });
        // DepartmentsService.findDeps()
        //     .then(function(res){
        //         $scope.departments = res.data;
        //
        //     },function(err){
        //         console.log("Error at employees/findDeps: " + err)
        //     });
        JobsService.findAllJobs()
            .then(function (res) {
                // console.log(res.data[0]);
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/findAllJobs: " + err);
            });
        // EmployeeService.findById($routeParams.employeeId)
        //     .then(function (res) {
        //         // console.log(res.data[0]);
        //         $scope.employee = res.data;
        //     }, function (err) {
        //         console.log("Error at employees/findById: " + err);
        //     });
        // JobsService.findById($routeParams.jobId)
        //     .then(function (res) {
        //         $scope.job = res.data;
        //     }, function (err) {
        //         console.log("Error at jobs/findOne: " + err);
        //     });
        /**
         * Reset form
         */

        $scope.reset = function () {
            this.employee = {};
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