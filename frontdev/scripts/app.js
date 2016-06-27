/**
 * Created by Eduard on 23.06.2016.
 */
var employeesList = [
    //Obiecte:
    {
        firstName: 'John',
        lastName: 'King',
        phone: '123456798',
        salary: '4500'
    },

    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '123456798',
        salary: '4500'
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '123456798',
        salary: '4500'
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '123456798',
        salary: '4500'
    },

    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '123456798',
        salary: '4500'
    }

];

function showList(){
    //Construieste in string html-ul unui tabel:
    var myTable = '<table border="1" class="table"><tr><th>First Name</th><th>Last' +
        'Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';

        //for each: aici i este index, spre deosebire de java unde i este direct obiectul
        for(var i in employeesList){ //td = table data(celula)

            myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+
                '</td> <td> <button type="button" onclick="alertEmployee('+ i+')"> Vizualizare </button> </td> <td> <button type="button" onclick="deleteEmployee('+ i+')"> Stergere </button></td></tr>';
        }
        myTable += '<tr><td></td>'+'<td></td>'+'<td></td>'+'</td><td>'+average()+'</td></tr>';


        myTable += '</table>';//inchide tabelul
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;//adauga acest cod html in fisierul html
}

var Employee = function(firstName, lastName, phone, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;

}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function totalSalary(){
    var total = 0;
    for(var i in employeesList){
        total += parseInt(employeesList[i].salary);
        //total += employeesList[index];
    }
   document.getElementById("totalSalaryCont").innerHTML = total;
}

function deleteLastEmployee() {
    employeesList.splice(employeesList.length - 1, 1);//delete(index, number of objects deleted)
    showList();
}

function alertEmployee(i){
    alert(employeesList[i].firstName+" "+employeesList[i].lastName+" "+employeesList[i].phone+" "+employeesList[i].salary);
    showList();
}
function deleteEmployee(i) {
    employeesList.splice(i, 1);
    showList();
}
function average(){
    var average = 0;
    for(var i in employeesList){
        average +=parseInt(employeesList[i].salary);
    }
    return average/employeesList.length - 1;
}





