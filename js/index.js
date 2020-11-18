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

window.addEventListener('load', event => {
  let html = '';

  memoryGame.shuffleCards(cards);

  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let card1 = ""
  let card2 = ""
  let levantadas = 0;

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if (levantadas === 0 && card.className === 'card') {
        card.className += ' turned';
        levantadas = 1;
        card1 = card
      }
      else if (levantadas === 1 && card.className === 'card') {
        card.className += ' turned';
        levantadas = 2;
        card2 = card
        turnedCards = document.querySelectorAll('.tunned');
        memoryGame.checkIfPair(card1.dataset.cardName, card2.dataset.cardName)
      }
      else if (card.className.includes('turned')) {
        if (card.className.includes('linked')) { }
        else {
          card.className = card.className.replace(' turned', '');
          card1 = ""
          card2 = ""
          levantadas = levantadas - 1
        }
      }
      if (levantadas === 2 && card1.dataset.cardName === card2.dataset.cardName) {
        card1.classList.add("linked");
        card2.classList.add("linked");
        levantadas = 0;
      }
      if (memoryGame.isFinished()) {
        alert(`You finished the game with ${memoryGame.pairsClicked} pairs of cards raised`)
      }
      let pairsClicked = document.querySelector('#pairs-clicked')
      pairsClicked.innerText = memoryGame.pairsClicked
      let pairsGuessed = document.querySelector('#pairs-guessed')
      pairsGuessed.innerText = memoryGame.pairsGuessed

    });

  });

});

var node = document.getElementsByTagName('div');
var divLength = node.length;
var randomDiv = Math.random() * divLength;

