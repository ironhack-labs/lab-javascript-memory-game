const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];
let card1 = "";
let card2 = "";
const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.shuffleCards().forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML += html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // turns card over and adds it to the pickCards array
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);
      // checks if the array has two cards
      if (memoryGame.pickedCards.length === 2) {
        card1 = memoryGame.pickedCards[0];
        card2 = memoryGame.pickedCards[1];
        //checks if the two cards have the same name, if not the cards are turned over
        if (!memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'))) {
          setTimeout(() => {
            card1.classList.toggle('turned');
            card2.classList.toggle('turned');
          }, 800);
        }
        //array is reset to empty
        memoryGame.pickedCards = [];
      }
      //game score is updated every two clicks
      document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
      // checks if all card pairs have been found
      if (memoryGame.isFinished()) document.querySelector('#finished-game').innerHTML = `<h1>You Won!!</h1>`;
    });
  });
});