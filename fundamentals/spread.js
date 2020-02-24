let allCars = [100, 200, 300];

function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

startCars(...allCars);

let threeAplhabets = 'abc';

function singleAplhabets(one, two, three) {
    console.log(one, two, three);
}

singleAplhabets(...threeAplhabets)

let employees = [
    {
    name: 'John',
    gender: 'male'
},

    {
        name: 'Jane',
        gender: 'female'
    }
]

function employeeData(employee1, employee2) {
    console.log(employee1.name, employee2.name)
}

employeeData(...employees);