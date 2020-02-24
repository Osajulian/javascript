import { Person } from './person.js';
// I noticed this only works in the browser console if you include the file extension - 'js'. Although this is not required in import statements.

export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;

    }
    teach() {
        console.log('teach');
    }
}