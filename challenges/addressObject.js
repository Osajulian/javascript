const address = {
    city: 'New York',
    state: 'NY',
    zipCode: '100471'
}

showAddress = address => {
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);

// factory function
createAddress1 = (city, state, zipCode) => {
    return {
        // city: city,
        // state: state,
        // zipCode: zipCode
        // If modern JavaSCript, if key and value are named the same, you use use one like below
        city,
        state,
        zipCode,
        showAddress () {
            console.log(city, state, zipCode);
        }
    }
  
}

let add1 = createAddress1('Santa Fe Springs', 'CA', '70421');
let add = createAddress1('Santa Fe Springs', 'CA', '70421');
let add3 = add1;
add.showAddress();

// constructor function
function CreateAddress2(city, state, zipCode) {
    this.city =city;
    this.state = state;
    this.zipCode = zipCode
    this.showAddress = () => {
        console.log(this.city, this.state, this.zipCode);
    }
}

let add2 = new CreateAddress2('Jersey City', 'NJ', '76543');
add2.showAddress();


// implement areEqual to check if 2 object's properties are equal
// implememnt areSame to check if 2 objects are pointing to the same reference location

areEqual = (address1, address2) => {
    return address1.city === address2.city && address1.state === address2.state && 
    address1.zipCode === address2.zipCode
    }

areSame = (address1, address2) => {
    return address1 === address2;
}

console.log(areSame(add3, add1));
console.log(areEqual(add3, add1));