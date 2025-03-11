const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
let hour = 0;
let minute = 0;
let second = 0;
let time = false;
let timer = null;
displayTime();
start.addEventListener("click", () => {
    if (!time) {
        time = true;
        timer = setInterval(() => {
            G();
            displayTime();
        }, 1000);
    }
});
stop.addEventListener("click", () => {
    time = false;
    clearInterval(timer);
});
reset.addEventListener("click", () => {
    time = false;
    clearInterval(timer);
    hour = 0;
    minute = 0;
    second = 0;
    displayTime();
});
function G() {
    if (time) {
        second++;
        if (second == 60) {
            minute++;
            second = 0;
            if (minute == 60) {
                hour++;
                minute = 0;
            }
        }
    }
}

function displayTime(){
    hour=String(hour).padStart(2,"0");
    minute=String(minute).padStart(2,"0");
    second=String(second).padStart(2,"0");
    document.querySelector(".hr").innerHTML = hour;
    document.querySelector(".min").innerHTML = minute;
    document.querySelector(".sec").innerHTML = second;
};