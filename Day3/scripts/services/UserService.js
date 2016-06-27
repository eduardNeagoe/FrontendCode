/**
 * Created by Eduard on 27.06.2016.
 */
hrApp.factory('UserService', function () {
     var usersDetailsList = [
         {
             first:$scope.firstName,
             last:$scope.lastName,
             i:$scope.id,
             c:$scope.cnp,
             a:$scope.age
    
         }
    ];
    return usersDetailsList;
    // returns undefined !?
});