hrApp.controller('EmployeeAddController',
    function($scope, $http, $location, CommonResourcesFactoryBackup, JobsService, EmployeeService, DepartmentsService,$routeParams) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        EmployeeService.findAllEmpl()
            .then(function (res) {
                // console.log(res.data[0]);
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/findAllEmpl: " + err);
            });
        DepartmentsService.findDeps()
            .then(function(res){
            $scope.departments = res.data;

        },function(err){
            console.log("Error at employees/findDeps: " + err)
        });
        JobsService.findAllJobs()
            .then(function (res) {
                // console.log(res.data[0]);
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at employees/findAllJobs: " + err);
            });
        // EmployeeService.findById($routeParams.employeeId)
        //     .then(function (res) {
        //         // console.log(res.data[0]);
        //         $scope.employee = res.data;
        //     }, function (err) {
        //         console.log("Error at employees/findById: " + err);
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
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
});