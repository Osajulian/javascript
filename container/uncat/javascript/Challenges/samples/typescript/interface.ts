
//duck typing.. walks, talks, quaks like a duck. It is a duck
interface Employee {
    name: string;
    title: string;
}

let developer = {
    name: 'Osa',
    title: 'Google Engineer',
    editor: 'VS Code'
}

let newEmployee: Employee = developer;

