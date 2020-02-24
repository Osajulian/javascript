//write a function that shows the properties of type string of the object passed to the function

function showProperties(obj) {
    for(let key in obj)
    if(typeof obj[key] === 'string')
    console.log(key, obj[key]);

}

const movie = {
    title: 'q',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Mr Choo',
    comments: 'great movie'
}

showProperties(movie);