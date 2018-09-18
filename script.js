
function showClock(){
    let date = new Date();
    let onlyDate = date.toDateString();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    var format = checkFormat(hours);

    hours = checkTime(hours);
   
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    
    // now display values:
    document.getElementById('time').textContent =  `${hours} : ${minutes} : ${seconds} : ${format}`;

    document.getElementById('todaysDate').textContent = `${onlyDate}`;
}


function checkFormat(time){
    var format;
    if(time >= 12){
         format = 'PM';
    }else{
        format = 'AM';
    }
    return format;
}
function checkTime(time){
    if(time > 12){
        time = time - 12;
    }
    if(time === 0){
        time = 12;
    }
    return time;
}
function addZero(time){
    if(time < 10){
        time = '0' + time;
    }
    return time;
}
// we call it here to see imidiate date:
showClock();
// it updates after every seconds:
setInterval(showClock, 1000);