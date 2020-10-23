const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("span");

function getTime(){
    const date =new Date();
    let hours =date.getHours();
    const minutes =date.getMinutes();
    let ampm = "AM";
    if(hours > 12){
        ampm = "PM";
        hours = hours % 12;
    }
    if( hours ===12){
        ampm ="PM";
    }
    clockTitle.innerText =`${hours < 12 ? `${ampm} ${hours}` : `${ampm} ${hours}`
            }:${minutes < 10 ? `0${minutes}` : minutes
        }`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();