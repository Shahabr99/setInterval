// Countdown;
function countdown(num) {
  let count = num;
  const timer = setInterval(function () {
    if (count > 0) {
      count--;
      console.log(count);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}
countdown(5);

//Random game
function randomGame() {
  let counter = 0;
  const timer = setInterval(function () {
    const randomNum = Math.random();
    counter++;
    console.log(randomNum);

    if (randomNum > 0.75) {
      clearInterval(timer);
      console.log(counter);
    }
  }, 1000);
}

randomGame();
