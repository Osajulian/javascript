//write 2 functions - the first function areEqual should check if two address objects's properties are equal, the function should return true otherwise return false. 
//The other function; areSame should tell us if addres1 and address2 are pointing to the exact same object, in other words they are referencing the same object.

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

address1 = new Address('Van Cortlandt', 'Bronx', '10471');
address2 = new Address('Van Cortlandt', 'Queens', '10471');




function areEqual(address1, address2) {
    for(let value in address1, address2) {
        if(address1[value] === address2[value])
       console.log('true');
       else console.log('false');
    // addressA = address1[value];
    // addressB = address2[value];
    // return addressA, addressB;
    // if(address1[value] !== address2[value])
    // console.log('false');
    }
}
console.log(areEqual(address1, address2));