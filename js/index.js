const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let roundPick = 0;
  let html = '';
  let card1,
    card2 = [];
  let tempCard;
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  let board = document.querySelector('#memory-board');
  board.innerHTML = html;
  const pairsClicked = document.querySelector('#pairs-clicked');
  const pairsGuessed = document.querySelector('#pairs-guessed');

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
      console.log(card);
      const target = event.currentTarget;
      roundPick++;
      target.classList.toggle('turned');

      if (roundPick === 1) {
        card1 = target.dataset.cardName;
        target.style.pointerEvents = 'none';
        tempCard = target;
      }
      if (roundPick === 2) {
        card2 = target.dataset.cardName;
        let match = memoryGame.checkIfPair(card1, card2);
        roundPick = 0;
        if (!match) {
          board.style.pointerEvents = 'none';
          setTimeout(() => {
            tempCard.classList.toggle('turned');
            target.classList.toggle('turned');
            board.style.pointerEvents = '';
          }, 1500);
        } else {
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
          tempCard.style.pointerEvents = 'none';
          target.style.pointerEvents = 'none';
          setTimeout(() => {
            if (memoryGame.checkIfFinished()) {
              alert('GAME COMPLETED! CONGRATS!');
              window.location.reload(false);
            }
          }, 1500);
        }
        pairsClicked.innerHTML = memoryGame.pairsClicked;
      }
    });
  });
});
