class Drone {
    constructor(id) {
        this.id = id;
    }
    get id() {
        // you can add other code here also
        return this._id
    }

    set id(value) {
        this._id = value
    }

    
}