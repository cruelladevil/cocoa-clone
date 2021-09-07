const statusBarTime = document.querySelector(".status-bar__time");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  statusBarTime.textContent = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
