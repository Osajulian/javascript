
var updateZipcode = function (zip, city) {
    this.zip = zip
    this.city = city
    console.log(this.city, this.zip)

}

let zipCode = {
    zip: '11787',
    city: 'Obalende'
};

// updateZipcode.call(zipCode, zipCode.zip, zipCode.city )
// //Obalende 11787

// updateZipcode.call(zipCode, zipCode.zip, 'Bronx' )
// Bronx, 11787

updateZipcode.call(zipCode, '10036', 'NYC')
// NYC 10036