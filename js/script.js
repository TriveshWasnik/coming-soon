const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const countDownDate = new Date("Jan 31, 2024 00:00:00");

const x = setInterval(function () {
  const now = new Date();
  const distance = countDownDate - now;
  days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    clearInterval(x);
    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}, 1000);
