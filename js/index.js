import MemoryGame from './memory.js';

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

let turnedCardsCounter = 0;

function play() {
  const turnedCards = document.querySelectorAll('.turned');
  const newTurnedCards = [...turnedCards].filter(ele => ele.className != 'card turned blocked');
  const card1 = newTurnedCards[0];
  const card2 = newTurnedCards[1];
  const card1Name = card1.getAttribute('data-card-name')
  const card2Name = card2.getAttribute('data-card-name')

  if (memoryGame.checkIfPair(card1Name, card2Name)) {
    card1.classList.add('blocked');
    card2.classList.add('blocked');
    turnedCardsCounter = 0;
  } 

  document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
  document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;

  if (memoryGame.isFinished()) {
    card1.classList.add('blocked');
    card2.classList.add('blocked')
    setTimeout(() => { alert('Yeeeah, you won!!!') }, 500)
  }
  
}


window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards().forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  document.querySelector('#memory-board').innerHTML = html;

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if (turnedCardsCounter === 2 && !card.classList.contains('turned')) return;

      if (card.classList.contains('turned')) {
        turnedCardsCounter--
        card.classList.remove('turned')
      } else {
        turnedCardsCounter++
        card.classList.add('turned')
      }

      if (turnedCardsCounter === 2) play();
    });
  });
});

