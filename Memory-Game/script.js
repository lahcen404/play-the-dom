
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

cards.forEach(card =>{
    card.style.order = Math.floor(Math.random() *100);
})
