// Write your solution in this file!
const employee = {
    name: 'value1',
    address: 'value2'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
    [key]: value,
}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key,) {
    const newEmployee = {...employee}
    delete newEmployee [key];

    return newEmployee; 
}
function destructivelyDeleteFromEmployeeByKey (employee,key) {
    delete employee[key];
    return employee
}
