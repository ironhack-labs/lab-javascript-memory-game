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

function updateScores() {
  const pairsClicked = document.querySelector('#pairs-clicked');
  const pairsGuessed = document.querySelector('#pairs-guessed');
  pairsClicked.innerHTML = memoryGame.pairsClicked;
  pairsGuessed.innerHTML = memoryGame.pairsGuessed;
}

function disableGuessedCards(cards) {
  document.body.style.pointerEvents = 'none';
  cards.forEach((cardDOM) => {
    cardDOM.style.pointerEvents = 'none';
    cardDOM.setAttribute('class', 'card turned guessed');
  });
  //take 1 second breath before continue guessing
  setTimeout(() => (document.body.style.pointerEvents = 'auto'), 1000);
}

function resetUnguessedCards(cards) {
  document.body.style.pointerEvents = 'none';
  setTimeout(() => {
    //wait 1 second while cards are reseted
    cards.forEach((cardDOM) => cardDOM.setAttribute('class', 'card'));
    document.body.style.pointerEvents = 'auto';
  }, 1000);
}

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.setAttribute('class', 'card turned');
      card.className += ' picked';
      const cardName = card.getAttribute('data-card-name');
      memoryGame.pickedCards.push(cardName);
      if (memoryGame.pickedCards.length === 2) {
        const firstPickedCard = memoryGame.pickedCards[0];
        const secondPickedCard = memoryGame.pickedCards[1];
        const allPickedCards = document.querySelectorAll('.picked');
        const isPair = memoryGame.checkIfPair(firstPickedCard, secondPickedCard);
        if (isPair) {
          disableGuessedCards(allPickedCards);
        } else {
          resetUnguessedCards(allPickedCards);
        }
        memoryGame.pickedCards = [];
        updateScores();
        const isFinished = memoryGame.checkIfFinished()
        if (isFinished) {
          document.querySelector('#memory-board').innerHTML = `<h1>You Won!!!</h1>`;
        }
      }
    });
  });
});
