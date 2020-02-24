// Global
  // Local
    // Local (name)
  // Local

let name = 'Andrew'

if (true) {
    let name = 'Mike'

    if (true) {
        let name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}

/* 
Variable shadowing in JavaScript is when a variable in a local scope uses its value
instead of a variable in a parent scope, so the local variable's value is shadowing 
over the parent's - basically hiding it from existence. So if you reference 'name' 
from the first 'if' block, you always going to get 'Mike' and you never get 'Andrew' 

Leaked global occurs in JavaScript when you assign a value to a variable that 
was never explicitly defined.
*/