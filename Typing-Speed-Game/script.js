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

let index=-1;

window.addEventListener("keydown", function (e) {
  let spans = wordDiv.querySelectorAll("span");

 
  if (e.key === "Backspace") {
    if (index >= 0) {
      spans[index].style.color = "#8cafff"; 
      index--; 
    }
    return; 
  }

  
  index++;

  
  if (index >= text.length) return;

  if (text[index] === e.key) {
    spans[index].style.color = "green";
  } else {
    spans[index].style.color = "red";
  }

  let userText = input.value;

  if (userText === text) {
    wordDiv.innerHTML = "<h2>Naaady !! 🎉</h2>";
  }
});

startBtn.addEventListener("click",function(){
    index =-1;
    displayText();
})
// let list = [1,2,3,54,5];

// console.log(list[4]);