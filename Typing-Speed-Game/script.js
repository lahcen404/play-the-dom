const wordDiv = document.querySelector(".the-word");
const input = document.querySelector(".input");
const startBtn = document.getElementById("start");


let text = "ila ktebty hadchi raak nadi yalah seerbi kteeeeb let s gooooo";
// let letters = text.split("");
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

// let list = [1,2,3,54,5];

// console.log(list[4]);