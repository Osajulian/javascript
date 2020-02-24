//Factory Method

function employees(firstName, lastName) {
    return {
        firstName,
        lastName,
        IncreasePay: (baseSalary) => {
           let newSalary = baseSalary + 1000;
           return newSalary;

    }
   
    }
};

let employee = employees('Osa', 'Amadasun');
let fullName = employee.firstName + ' ' + employee.lastName;
let newSalary = employee.IncreasePay(1000);
console.log(`${fullName} new salary is ${newSalary}`);
