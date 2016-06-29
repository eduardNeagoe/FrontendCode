hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService', 'DepartmentsService', 'JobsService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, EmployeeService, DepartmentsService, JobsService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        EmployeeService.findAllEmpl()
            .then(function (res) {
                console.log(res.data[0]);
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
                console.log(res.data[0]);
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at employees/findAllJobs: " + err);
            });
        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                // console.log(res.data[0]);
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findById: " + err);
            });
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);