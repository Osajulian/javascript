
const employee = {
    firstName: 'Osa',
    lastName: 'Amadasun',
    increaseSalary: (baseSalary) => {
        let newSalary = baseSalary + 1000;
        return newSalary;
    }
}

console.log(`${employee.firstName} ${employee.lastName} is now paid ${employee.increaseSalary(500)}`);