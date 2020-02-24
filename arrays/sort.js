// sorting & reversing with numbers and strings in an array

const numbers = [3, 2, 1];
console.log(numbers.sort());

console.log(numbers.reverse());

// sorting objects

const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'javascript'}

    
]

courses.sort((a, b) => {
    // A < B => -1
    // A > B => 1
    // A === B => 0

    const nameA = a.name.toLocaleLowerCase()
    const nameB = b.name.toLocaleLowerCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
})

console.log(courses);