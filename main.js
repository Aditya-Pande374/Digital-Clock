const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");

function updateclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().toDateString();

    /* 12 hour format
    let ampm = "AM";

    if (h > 12) {
        h -= 12;
        ampm = "PM";
    }
    */

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    dateEl.innerText = d;
    // ampmEl.innerText = ampm;

    setTimeout(updateclock, 1000);
}

updateclock();