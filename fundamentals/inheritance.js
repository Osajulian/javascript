class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;

    }
    teach() {
        console.log('teach');
    }
}

teacher = new Teacher('Osa', 'BSc');
console.log(teacher.name);
console.log(teacher.degree);
console.log(teacher.teach());