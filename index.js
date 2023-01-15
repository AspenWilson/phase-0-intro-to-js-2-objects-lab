// Write your solution in this file!
const employee = {
    name : 'Sam',
    streetAddress: {}
}
function updateEmployeeWithKeyAndValue() {
    const employee1 = {
        name: employee.name,
        streetAddress: '11 Broadway'
    }
    return employee1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress) {
    employee[streetAddress] = '12 Broadway';
    return employee
}
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,name) {
    delete employee.name;
    return employee;
}

