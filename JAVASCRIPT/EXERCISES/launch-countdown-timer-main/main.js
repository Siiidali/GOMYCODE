const timer = () => {
  const endDate = new Date("December 17, 2024 03:24:00").getTime();
  const now = new Date().getTime();
  console.log(endDate, now);
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = hour * 24;

  const diffrence = endDate - now;

  const timeDay = Math.floor(diffrence / day);
  const timeHours = Math.floor((diffrence % day) / hour);
  const timeMinutes = Math.floor((diffrence % hour) / minute);
  const timeSeconds = Math.floor((diffrence % minute) / second);

  document.querySelector(".days").innerHTML = timeDay;
  document.querySelector(".hours").innerHTML = timeHours;
  document.querySelector(".minutes").innerHTML = timeMinutes;
  document.querySelector(".seconds").innerHTML = timeSeconds;
};
setInterval(timer, 1000);
