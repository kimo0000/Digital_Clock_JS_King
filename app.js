const h = document.getElementById('hour');
const m = document.getElementById('minute');
const s = document.getElementById('second');

// console.log(new Date())

function getTime() {
    const dateNow = new Date();
    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();

    h.textContent = hours < 10 ? '0' + hours : hours;
    m.textContent = minutes < 10 ? '0' + minutes : minutes;
    s.textContent = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(getTime, 1000);