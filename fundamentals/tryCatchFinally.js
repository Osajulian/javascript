try {
    let car = newCar
}
catch(error) {
    console.log(error);

}
finally {

    console.log('this will always execute... ') // irrespective of the try throwing an error and or the catch block catching iy
}

// developer defined errors - throw

try {
    // code here...
    throw new Error('this is a developer defined error');
}
catch(error) {
    console.log('error: ' + error);
}

finally {
    console.log('Ain\'t that sweet, this always executes');
}
