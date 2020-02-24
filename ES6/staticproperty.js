// Instance variables are diiferent from class variables
// or static properties or class properties

class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

// create static property
Drone.maxHeight = 2000;