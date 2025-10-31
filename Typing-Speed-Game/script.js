const wordDiv = document.querySelector(".the-word");
const input = document.querySelector(".input");
const startBtn = document.getElementById("start");
const timer = document.querySelector("#timer");
const gotScore = document.querySelector(".got");
const totalScore = document.querySelector(".total");


 let score = 0;
  let totalTyped = 0;
  let correctTyped = 0;
  let timeLeft = 10;



let text = "ila ktebty hadchi raak nadi yalah seerbi kteeeeb let s gooooo";
// let letters = text.split("");
  totalScore.innerText = text.length;

console.log(text);

function displayText() {
  wordDiv.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.textContent = text[i];
    wordDiv.appendChild(span);
  }

  console.log(wordDiv.innerHTML); // heere spans of every letter split
  //   console.log(text); // all lettters

  input.value = "";
  input.focus();
}

displayText();

let index = -1;

window.addEventListener("keydown", function (e) {
  let spans = wordDiv.querySelectorAll("span");

  if (e.key === "Backspace") {
    if (index >= 0) {
      spans[index].style.color = "#8cafff";
      index--;
      score--;
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

  let userText = input.value;

  if (userText === text) {
    wordDiv.innerHTML = "<h2>Naaady !! 🎉</h2>";
  }
});



startBtn.addEventListener("click", function () {
 
    score=0;
    gotScore.innerText = score;

  const countDownInterval = setInterval (()=>{
    timeLeft--;
    timer.innerText = timeLeft;
    
    if(timeLeft <= 0){
        clearInterval(countDownInterval);
    }


},1000)

  index = -1;
  displayText();


});

let wpm = (text.length / 5) /1

let accurancy = (score / text.length) *100

console.log("acc = ", acc)