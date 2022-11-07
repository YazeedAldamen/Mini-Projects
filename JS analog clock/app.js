const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const timeInterval = 6;

  console.log(now);
  console.log(seconds * timeInterval);
  console.log(minutes * timeInterval);
  console.log(hours * 30);

  secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
  minutesHand.style.transform = `rotate(${minutes * timeInterval}deg)`;
  hoursHand.style.transform = `rotate(${hours * 30}deg)`;
}

setInterval(getTime, 100);
