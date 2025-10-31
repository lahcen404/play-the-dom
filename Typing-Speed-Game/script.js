const wordDiv = document.querySelector(".the-word");
const input = document.querySelector(".input");
const startBtn = document.getElementById("start");
const timer = document.querySelector("#timer");
const gotScore = document.querySelector(".got");
const totalScore = document.querySelector(".total");
const finishDiv = document.querySelector(".finish");

let score = 0;
let timeLeft = 15;
let index = -1;
let gameActive = false;
let timerStarted = false;
let countDown;

let text = "ila ktebty hadchi raak nadi yalah seerbi kteeeeb let s gooooo";
totalScore.innerText = text.length;

function displayText() {
  wordDiv.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.textContent = text[i];
    wordDiv.appendChild(span);
  }
  input.value = "";
  input.focus();
}

displayText();

window.addEventListener("keydown", function (e) {
  if (!gameActive) return;

  // start timer first keeey press
  if (!timerStarted && e.key.length === 1) {
    startTimer();
    timerStarted = true;
  }

  let spans = wordDiv.querySelectorAll("span");

  if (e.key === "Backspace") {
    if (index >= 0) {
      spans[index].style.color = "#8cafff";
      index--;
      if (score > 0) score--;
      gotScore.innerText = score;
    }
    return;
  }

  index++;
  if (index >= text.length) return;

  if (text[index] === e.key) {
    spans[index].style.color = "green";
    score++;
    gotScore.innerText = score;
  } else {
    spans[index].style.color = "red";
  }

  if (index === text.length - 1) {
    showResults();
  }
});

function startTimer() {
  countDown = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;
    if (timeLeft <= 0) {
      showResults();
    }
  }, 1000);
}

function showResults() {
  gameActive = false;
  clearInterval(countDown);

  let timeUsed = 15 - timeLeft;
  let timeUsedMinutes = timeUsed / 60;
  let accuracy = (score / text.length) * 100;
  let wpm = (text.length / 5) / timeUsedMinutes;

  finishDiv.innerHTML = `
    <p>Time: ${timeUsed}s</p>
    <p>Accuracy: ${accuracy.toFixed(1)}%</p>
    <p>WPM: ${wpm.toFixed(1)}</p>
  `;
}

startBtn.addEventListener("click", function () {
  score = 0;
  index = -1;
  timeLeft = 15;
  gameActive = true;
  timerStarted = false;
  gotScore.innerText = score;
  finishDiv.innerHTML = "";
  timer.innerText = timeLeft;
  displayText();
  clearInterval(countDown);
});
