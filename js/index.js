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

let cardsClicked = [];

let waiting = false;

function turnCard(card) {
  card.classList.add("turned")
}

function turnCardBack(card) {
  card.classList.remove("turned")
}

function updateCounter() {
  document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed

}

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (waiting) {
          //console.log('Waiting to unflip the cards')
        } else {
        let cardName = card.dataset.cardName;
        cardsClicked.push(card);
        if (cardsClicked.length === 1) {
          turnCard(card);
        } else {
          turnCard(card);
          if (memoryGame.checkIfPair(cardsClicked[0].dataset.cardName, cardsClicked[1].dataset.cardName)) {
            cardsClicked = [];
            updateCounter();
            if (memoryGame.isFinished()) {
              alert(`Game finished! You won!!! Attempts: ${memoryGame.pairsClicked/2}.`)
            }
          } else {
            memoryGame.checkIfPair(cardsClicked[0].dataset.cardName, cardsClicked[1].dataset.cardName);
            waiting = true;
            setTimeout( () => {
              turnCardBack(cardsClicked[0]);
              turnCardBack(cardsClicked[1]);
              cardsClicked = [];
              waiting = false;
              }, 1500);
          }
        }  
      }
    });
  });
});
