//create an object using all three styles (object literal, factory function, constructor function)

//object literal
const address = {
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '10247'
}

console.log(address)

//constructor function
function ShowAddress(city, state, zipCode) {
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.displayAddress = function() {
        console.log('Address');
    }
};

let address1 = new ShowAddress('Bronx', 'NY', '10471')
console.log(address1)

//factory function
function showAddress(city, state, zipCode) {
    return {
    city,
    state,
    zipCode,
    displayAddress() {
        console.log('Address1')
    }
}
}

let address2 = showAddress('Queens', 'NY', '10071')
console.log(address2)