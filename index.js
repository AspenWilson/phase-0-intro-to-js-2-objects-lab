// Write your solution in this file!
const employee = {
    name: "Aspen",
    streetAddress: "123 Code Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

