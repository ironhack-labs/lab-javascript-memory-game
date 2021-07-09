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

const pairsClickedElement = document.getElementById('pairs-clicked');
const pairsGuessedElement = document.getElementById('pairs-guessed');

function turnCard(card) {
  if (memoryGame.pickedCards.length < 2) {
    card.classList.add("turned")
  }
}

function addToPickedCards(card) {
  if (memoryGame.pickedCards.length < 2) {
    memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
  }
};

function checkIfPickedCardsIsPair() {
  if (memoryGame.pickedCards.length === 2) {
    let firstCard = memoryGame.pickedCards[0];
    let secondCard = memoryGame.pickedCards[1];
    let isPair = memoryGame.checkIfPair(firstCard, secondCard);
    updatePairsElements();
    if (isPair === false) {
      setTimeout(() => {
        unturnCard(firstCard);
        unturnCard(secondCard);
        memoryGame.pickedCards = [];
      }, 1000)
    } else {
      memoryGame.pickedCards = [];
      if (memoryGame.checkIfFinished()) {
        let html = ''
        html += `
        <div><h1>YOU WON!</h1></div>
        `
        document.querySelector('#memory-board').innerHTML = html;
      }
    }
  }
}

function updatePairsElements() {
  pairsClickedElement.innerText = memoryGame.pairsClicked;
  pairsGuessedElement.innerText = memoryGame.pairsGuessed;
}

function unturnCard(card) {
  document.querySelectorAll('.card').forEach((cardElement) => {
    if (cardElement.getAttribute('data-card-name') === card) {
      card.classList.remove("turned");
      break;
    }
  });
}

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards();
  let html = '';
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
      if (memoryGame.pickedCards.length < 2) {
        turnCard(card);
        addToPickedCards(card);
        checkIfPickedCardsIsPair();
      }
    });
  });
});