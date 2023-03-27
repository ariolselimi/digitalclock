const hoourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function upClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h-12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;

        hoourEl.innerText = h
        minutesEl.innerHTML = m
        secondEl.innerText = s
        ampmEl, (innerText = ampm)
        setTimeout(() =>{
            upClock()
        }, 1000)
    }
upClock()