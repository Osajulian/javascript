 //returns true if image is landscape i.e. width > height and false if otherwise (potrait)
function isLandscape(width, height) {
    return (width > height )

    // return (width > height ) ? true : false 
    // this is amatuerish. There's no need to explicitly return 'true' or 'false. 
    // The first option is better code as the condition will resolve and return true or false
   
}

console.log(isLandscape(5000, 5000));