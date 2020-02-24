//function takes a parameter, which is the speed of the car with the following assumptions
//Speed Limit = 70
//If car is driving under or = speed limit, you get an 'OK'
//For every 5 above speed limit, you get a 1 point demerit. E.g. if I drive at 75, you get 1 point, 80, you get 2 points. Note if you drive say 72, you are still 'OK'
//If the driver gets more than 12 points license is 'Suspended'
//Tip - use Math.floor

//Osa's solution
function checkSpeed(speed){
    const speedLimit = 70;
    let currentSpeed =  Math.floor(speed);
    let demerits = 0;
    let allowance = 5;
    if(currentSpeed <= speedLimit + allowance  )
    return `${currentSpeed} OK`;
    else 
    for(i=70; i<=currentSpeed; i+=5)
    demerits++;
    return demerits > 12 ? 'Suspended' + ' ' + demerits : demerits + ' ' + 'demerits';
  
   
}

// console.log(checkSpeed(130));

//Mosh's  solution

function checkSpeed2(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint) {
        return `${speed} OK`;
    }
     
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12)
        return 'License suspended';
        return `${points} Points`;
    
    
}

console.log(checkSpeed2(120))