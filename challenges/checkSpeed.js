// Speed Limit = 70
// 5 above speed limit => 1 point
// more 12 points => suspended

function checkSpeed(speed) {

    let speedLimit = 70;
    let points = 0;
    let speedToSuspended = 12;
    let speedToPoint = Math.floor((speed - speedLimit) / 5)
    if (speedToPoint >= speedToSuspended) {
        return 'Your points of: ' + speedToPoint + ' is over the speed Limit so your licence is suspended'
    }
    else {
return 'Your points of: ' + speedToPoint + ' points has been accumulated per your speed of: ' + speed;
        // for (let i = 0; i <= speedToPoint; i+=5) {
        //     points += 1;
          
        }
    //     return points;
    // }
        
     
   
    }



console.log(checkSpeed(130));