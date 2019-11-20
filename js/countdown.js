function countdown(endT,callback) {
    var days,hours,minutes,sec,timer;
        
    end = new Date(endT);
    //pocetno vrijeme
    end = end.getTime(); 
    if (isNaN(end)) {
    alert('@ countdown.js @  "Invalid Date"');
    return;
}
    //Timer 
    timer = setInterval(calculate,1000);

    function calculate(){
    var current = new Date();
	//Preostalo vrijeme
    var remaining = parseInt((end - current.getTime())/1000); 
          
    if (remaining <= 0){
    clearInterval(timer);
    days=0;
    hours=0;
    minutes=0;
    sec=0;
    display(days,hours,minutes,sec);
    if (typeof callback === 'function' ) {
    callback();
}			
}

else {      
    days = parseInt(remaining/86400);
    remaining = (remaining%86400);
    hours = parseInt(remaining/3600);
    remaining = (remaining%3600);
    minutes = parseInt(remaining/60);
    remaining = (remaining%60);
    sec = parseInt(remaining);
    display(days,hours,minutes,sec);                            
}
}

//funckija koja displaya rezultate u divove sa ID u htmlu
function display(days,hours,minutes,sec) {
	var dl = days.toString().length;
    if (dl == "1") {
    sl = 2;
}
else{
    if (isNaN(dl)) {
    sl = 3;
}
    sl = dl;
}
    document.getElementById("days").innerHTML = ("00"+days).slice(-sl);
    document.getElementById("hours").innerHTML = ("0"+hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0"+minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0"+sec).slice(-2);
}
}