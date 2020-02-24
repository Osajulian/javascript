// 'use strict'

// this will produce an error due to 'use strict'
// without it, it will return as color will be a leaked global variable -
// it will be implicitly created an attached to the global scope

const changeColor = () => {
    color = 'blue'
    return color;
}

console.log(changeColor());
