const clock = document.querySelector(".clock");

const hours = new Date().getHours();
const minute = new Date().getMinutes();

function clockAct() {
    clock.innerText = `${hours}:${minute}`
};

setInterval(clockAct, 1000);