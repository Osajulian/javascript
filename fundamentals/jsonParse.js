// use JSON.parse() for JSON data received from an api

let jsonIn = 
`
[
    { "id": 123},
    { "id": 456 },
    { "id": 789 }
]
`

console.log(JSON.parse(jsonIn));