
//slice
let ratings = [1, 2, 3, 4, 5, 6, 7]
let removedRatings = ratings.slice(0, 5)

//remember slice takes the element before but not including tghe index specified as the 2nd slice argument

console.log(removedRatings)
//[1,2,3,4,5]

console.log(ratings)
//[1,2,3,4,5,6,7] - untouched


//splice
let ratings = [1, 2, 3, 4, 5, 6, 7]
let removedRatings = ratings.splice(0, 5)


console.log(removedRatings)
//[1,2,3,4,5]

console.log(ratings)
//[6,7] - touched