let o = {
    carId: 123,
    getId: function() {
        console.log(this.carId);
    }
}

o.getId();

