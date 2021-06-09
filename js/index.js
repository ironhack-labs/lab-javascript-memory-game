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

const pairsClickedValue = document.getElementById('pairs-clicked');
const pairsGuessedValue = document.getElementById('pairs-guessed');

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

function flipCard(card) {
  if (!card) return null;

  let pair = false;

  card.classList.add('turned');

  if (memoryGame.pickedCards.length >= 2) {
    clearFlipped(memoryGame.pickedCards);
    memoryGame.pickedCards.splice(0, 2);
  }

  memoryGame.pickedCards.push(card);

  if (memoryGame.pickedCards.length == 2) {
    printPairsClicked();

    if (
      memoryGame.checkIfPair(
        memoryGame.pickedCards[0].getAttribute('data-card-name'),
        memoryGame.pickedCards[1].getAttribute('data-card-name')
      )
    ) {
      memoryGame.pickedCards.forEach((card) => card.classList.add('blocked'));
      printPairsGuessed();
      if (memoryGame.checkIfFinished()) alert('YOU WON!');
    }
  }
}

function clearFlipped(cards) {
  if (!cards) return null;

  cards.forEach((card) => {
    if (!card.classList.contains('blocked')) {
      card.classList.remove('turned');
    }
  });
}

function printPairsClicked() {
  pairsClickedValue.textContent = memoryGame.pairsClicked;
}

function printPairsGuessed() {
  pairsGuessedValue.textContent = memoryGame.pairsGuessed;
}

window.addEventListener('load', (event) => {
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
      // TODO: write some code here

      flipCard(card);
    });
  });
});
