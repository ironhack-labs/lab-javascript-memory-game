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
let clicks = 0;
window.addEventListener('load', event => {
  let html = '';
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
    card.addEventListener('click', (event) => {
      let cardObject = event.target.parentNode;
      if (cardObject.classList.contains('blocked')) return null;

      memoryGame.pickedCards.length === 0 ? resetCards() : null;
      memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
      cardObject.classList.toggle('turned');

      if(memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          let turnedCards = document.querySelectorAll('.turned');
          turnedCards.forEach((card) => {
            card.classList.add('blocked');
          })
        };
        updateStats();
        memoryGame.pickedCards = [];
      }

    });
  });
 
});
//memoryGame.shuffleCards();

function resetCards() {
    let turnedCards = document.querySelectorAll(".turned");
    turnedCards.forEach((card) => {
      !card.classList.contains('blocked') ? card.classList.remove("turned") : null;
    })
}

function updateStats() {
  let clicked = document.getElementById('pairs-clicked');
  let guessed = document.getElementById('pairs-guessed');
  clicked.innerHTML = memoryGame.pairsClicked;
  guessed.innerHTML = memoryGame.pairsGuessed;
}