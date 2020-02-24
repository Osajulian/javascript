function showNumbers(number) {
    for (let i=number;i>=0;i--) {
        if (i % 2 === 0) {

            console.log(i, ' EVEN');
        }
        else {
            console.log(i, ' ODD');
        }
      
    }
}

showNumbers(10);