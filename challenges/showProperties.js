// function should return only object properties that have a string value

const movie = {
    name: 'a',
    year: 1980,
    director: 'b',
}
showProperties = obj => {
    for (let key in obj)
    if (typeof obj[key] === 'string')
    console.log(key, obj[key])
}

showProperties(movie);
