//create an address function with 3 properties
// street
// city
// zipCode
// this function takes in an address object and displays all the properties of the object along with their values

function ShowAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
   
        

    }


const address1 = new ShowAddress('Bronx', 'New York', '10047');
// console.log(address1.displayAddress());

function displayAddress(add) {
    for(let key in add)
    console.log(add[key]);
}


displayAddress(address1)