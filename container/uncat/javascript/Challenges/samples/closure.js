//closure

let salarayUpdater = function (salary) {
    let currentSalary = salary
    let generator = function () {
        currentSalary *= 2;
        return currentSalary
    }
    return generator;
}

let updateFn = salarayUpdater(5);

console.log(updateFn())