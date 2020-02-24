
function Employees(firstName, lastName) {
    this.firstName;
    this.lastName;
    this.increaseSalary = (baseSalary) => {
        let newSalary = baseSalary + 1000;
        return newSalary;
    }
}

let employee = new Employees();
// employee.firstName = 'Osa';
// employee.lastName = 'Amadasun';
let fullName = (employee.lastName='Osa') + ' ' + (employee.lastName='Madsun');
console.log(fullName);
console.log(`${fullName} has a new salary of ${employee.increaseSalary(3000)}`)

// employee.newPosition = 'Software Development Manager';

//the ablove is == to below (remeber to add ' ' to the property name)
employee['newPosition'] = 'Software Development Manager';