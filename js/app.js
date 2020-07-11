


var hours = 0;


var min = 0;


var sec = 0;

var msec = 0;




var hoursHeading = document.getElementById("hours");

var minHeading = document.getElementById("min");

var secHeading = document.getElementById("sec");

var msecHeading = document.getElementById("msec");

var interval;
var interval1;
function timer1(){

msec++

msecHeading.innerHTML = msec;

if (msec >= 100){

sec++

secHeading.innerHTML = sec;

msec = 0;

}

else if (sec >= 60 ) {

min++

minHeading.innerHTML = min;

sec = 0;
}





}



function timer2(){

    hours++
    
    hoursHeading.innerHTML = hours;

    
 
    
    
    
    
    
    }
    


function start(){



interval=setInterval(timer1, 10)

interval1=setInterval(timer2, 3600000)



}



function stop(){


clearInterval(interval)
    
clearInterval(interval1)
    
    }
    



function reset(){



     hours = 0;


     min = 0;
    
    
     sec = 0;
    
     msec = 0;


     hoursHeading.innerHTML = hours
minHeading.innerHTML = min
secHeading.innerHTML = sec
msecHeading.innerHTML = msec

stop()


}


    
    
    
    
    
    
    
    
    
   