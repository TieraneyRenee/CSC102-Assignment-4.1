function startFun(){
    console.log("startFun() started");//for troubleshooting. it will tell if something isn't linked up
    document.getElementById("startButton").disabled = true; //will disable the button once clicked
    document.getElementById("stopButton").disabled = false;//enables the stop button
    document.getElementById("myMarquee").start(); //allows us to manually start movement of the image within the marquee
}

function stopFun(){
    console.log("stopFun() started");//log for debugging purposes
    document.getElementById("stopButton").disabled = true;//stop button
    document.getElementById("startButton").disabled = false;//will enable hitting the start button
    document.getElementById("myMarquee").stop();//allows stopping movement of the image within the marquee
}