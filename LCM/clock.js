const clock = document.querySelector("#clock");

const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minute = String(date.getMinutes()).padStart(2, "0");

function clockAct() {
    clock.innerText = `${hours}:${minute}`
};

setInterval(clockAct, 1000);