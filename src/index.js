// src/index.js

window.addEventListener('load', (event) => {
  const cardsArray = [
    { name: 'aquaman', img: 'img/aquaman.jpg' },
    { name: 'batman', img: 'img/batman.jpg' },
    { name: 'captain america', img: 'img/captain-america.jpg' },
    { name: 'fantastic four', img: 'img/fantastic-four.jpg' },
    { name: 'flash', img: 'img/flash.jpg' },
    { name: 'green arrow', img: 'img/green-arrow.jpg' },
    { name: 'green lantern', img: 'img/green-lantern.jpg' },
    { name: 'ironman', img: 'img/ironman.jpg' },
    { name: 'aquaman', img: 'img/aquaman.jpg' },
    { name: 'batman', img: 'img/batman.jpg' },
    { name: 'captain america', img: 'img/captain-america.jpg' },
    { name: 'fantastic four', img: 'img/fantastic-four.jpg' },
    { name: 'flash', img: 'img/flash.jpg' },
    { name: 'green arrow', img: 'img/green-arrow.jpg' },
    { name: 'green lantern', img: 'img/green-lantern.jpg' },
    { name: 'ironman', img: 'img/ironman.jpg' }
  ];

  const memoryGame = new MemoryGame(cardsArray);
  memoryGame.shuffleCards();

  const memoryBoard = document.querySelector('#memory-board');
  memoryGame.cards.forEach((pic) => {
    const cardHTML = `<div class="card" data-card-name="${pic.name}">
      <div class="back" name="${pic.img}"></div>
      <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
    </div>`;
    memoryBoard.innerHTML += cardHTML;
  });

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (memoryGame.pickedCards.length < 2 && !card.classList.contains('turned')) {
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);

        if (memoryGame.pickedCards.length === 2) {
          const card1 = memoryGame.pickedCards[0];
          const card2 = memoryGame.pickedCards[1];

          const isPair = memoryGame.checkIfPair(
            card1.getAttribute('data-card-name'),
            card2.getAttribute('data-card-name')
          );

          if (isPair) {
            card1.classList.add('blocked');
            card2.classList.add('blocked');
            memoryGame.pickedCards = [];
          } else {
            setTimeout(() => {
              card1.classList.remove('turned');
              card2.classList.remove('turned');
              memoryGame.pickedCards = [];
            }, 1000);
          }

          if (memoryGame.checkIfFinished()) {
            alert('You won!');
          }
        }
      }
    });
  });
});
