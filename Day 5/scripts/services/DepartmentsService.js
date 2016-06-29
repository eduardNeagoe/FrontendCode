/**
 * Created by Eduard on 29.06.2016.
 */
hrApp.service('DepartmentsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findDeps: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert('Eroare'+err);
                        return err;
                    });
            }
        }
    }]
);