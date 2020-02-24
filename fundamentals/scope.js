// Lexical Scope (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, 
// or in any parent/ancestor scope

// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)

/*
JavaScript uses lexical scoping, this is sometimes referred to as static scoping 
and this is the idea that a variable defined in one part of your program might not 
be accessible everywhere else in your program. The context in which the variable is 
defined and used comes in play.

Global scope contains all of the things defined outside code blocks.
Local scope contains all of the things defined inside code blocks
In a scope, you can access variables defined in that scope, or in any parent/ancestor scope.

*/