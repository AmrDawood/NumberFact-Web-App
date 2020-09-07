
window.addEventListener('load',showTime);

function showTime(){
  let timeNow =new Date(),
  houres = timeNow.getHours(),
  minutes =timeNow.getMinutes(),
  secondes = timeNow.getSeconds();
    if(houres<10){
        houres = "0"+houres
    }
    if(minutes<10){
        houres = "0"+minutes
    }
    if(secondes<10){
        secondes = "0"+secondes
    }
document.querySelector('.digitalClock').textContent =`${houres}:${minutes}:${secondes}`;
setInterval(showTime,500);
} 