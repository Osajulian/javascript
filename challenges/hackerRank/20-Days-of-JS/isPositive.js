function isPositive(...a) {
    let numArray = [];
    for (let i=1; i<a.length; i++) {
        numArray.push(a[i])
        

    }
    // return numArray;
    numArray.forEach(num => {
        
        let message = ''
        try {
            if ( Math.sign(num) === 0) throw new Error('Zero Error');
            else if ( Math.sign(num) === -1 ) throw new Error('Negative Error');
            else message += 'Yes';
            
        } catch(e) {
    console.log(e.message);
}
finally {
    return console.log(message)
}
    })
    
}



isPositive(10, -5, 0, -44);