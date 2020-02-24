//object literal 

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw');
    }
}

//factory function

function createCircle(radius) {
    return {
    radius,
    draw() {
        console.log('draw');
    }
}
}

const circle1 = createCircle(7);
// console.log(circle1.radius);

// circle1.draw();

//constructor function
function CreateCircle2(radius, location) {
    this.radius = radius;
    this.location = location;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new CreateCircle2(100);
console.log(circle2.radius);
