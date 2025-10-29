const cards = document.querySelectorAll(".card");
const score = document.getElementById("score");
const victoireMsg = document.getElementById("victoire");
const attempts = document.getElementById("attempts");

cards.forEach((card) => {
  card.style.order = Math.floor(Math.random() * 100);
});

let pointts = 0;
let firstCard = null;
let secondCard = null;
let mohawalat = null;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // ignore if alreaady flipped
    if (card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    mohawalat++;
    attempts.innerText = mohawalat;

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;

      if (firstCard.dataset.teamLogo === secondCard.dataset.teamLogo) {
        // keep flipped
        firstCard = null;
        secondCard = null;
        pointts++;

        score.innerText = pointts;

        if (pointts == 10) {
          victoireMsg.innerText = "You Win!!!";
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          firstCard = null;
          secondCard = null;
        }, 500);
      }
    }
  });
});
