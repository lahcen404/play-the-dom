
const cards = document.querySelectorAll('.card');
const score = document.getElementById("score");


cards.forEach(card =>{
    card.style.order = Math.floor(Math.random() *100);
})


let firstCard = null;
let secondCard = null;

cards.forEach(card => {
  card.addEventListener('click', () => {
    // ignore if alreaady flipped
    if (card.classList.contains('flipped')) return;

    
    card.classList.add('flipped');

    
    if (!firstCard) {
      firstCard = card;
    } 
    else {
      
      secondCard = card;

      
      if (firstCard.dataset.teamLogo === secondCard.dataset.teamLogo) {
        // keep flipped
        firstCard = null;
        secondCard = null;
        
      } 
      else {
        
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          secondCard = null;
        }, 500);
      }
    }
  });
});