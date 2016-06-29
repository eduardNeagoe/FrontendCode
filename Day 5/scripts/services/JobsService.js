/**
 * Created by Eduard on 29.06.2016.
 */
hrApp.service('JobsService',['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
    return {
        findAllJobs: function () {
            return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                .success(function (data) {
                    return data;
                })
                .error(function (err) {
                    alert('Eroare'+err);
                    return err;
                });
        },

        findById: function (jobId) {
            return $http.get(CommonResourcesFactoryBackup.findOneJobUrl +'/'+ jobId)
                .success(function (data){
                    return data;
                })
                .error(function(err){
                    alert('Eroare'+err);
                })
        }
    }
}]);