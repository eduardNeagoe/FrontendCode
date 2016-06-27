hrApp.factory('employeeActionsService', function () {
    var employeesMenu = [ // TODO #11 - add menu items

        {
            label: "Employee list",
            url:"#/employeeslist"
        },
        {
            label:"Add employee",
            url:"#/employeeadd"
        }];
    return employeesMenu;

    }

);