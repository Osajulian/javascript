
function StopWatch() {
    this.duration = 0;
 
    function start(params) {
        
    };

    function stop(params) {
        
    };

    function reset(params) {
        
    }

    }

    let countDown = 0;
    var updateCountDown = setInterval(function() {
        countdown++
        console.log(countDown);
    }, 1000)

    //ToDo
//create start method
//create stop method
//error message if you attempt to start Stopwatch after it has already started - "Error: Stopwatch has already started"
//error message if you attempt to stop Stopwatch after it has already been stopped - "Error: Stopwatch is not started"


