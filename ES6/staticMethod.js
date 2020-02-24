class Drone {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // instance method
    fly() {
        console.log(`Drone $(this.id) is flying`)
    }

    // static method
    static getCompany() {
        console.log(`In get company`)
        // Note that this.id will not work here 
        // because this is a static method and this.id
        // does not exist on the class, it is on
        // the instance
    }
}

Drone.getCompany();