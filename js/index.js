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
memoryGame.shuffleCards(cards);
let counter = 0;
let firstCard;
let secondCard;
let blockClick = true;
let unturn = document.querySelectorAll('card');

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div id="${pic.name}" class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.name}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  let pairsClicked = document.getElementById('pairs-clicked');
  let pairsGuessed = document.getElementById('pairs-guessed');

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if (blockClick) {
        if(counter === 0) {
          card.classList.add('turned');
          counter += 1;
          firstCard = card;
        } else if (counter === 1) {
          card.classList.add('turned');
          counter = 0;
          secondCard = card;
          blockClick = false;
          setTimeout(() => {
            if (!memoryGame.checkIfPair(firstCard.id, secondCard.id)) {
              firstCard.classList.remove('turned');
              secondCard.classList.remove('turned');
            }
            pairsClicked.innerHTML = memoryGame.pairsClicked; 
            pairsGuessed.innerHTML = memoryGame.pairsGuessed;
            blockClick = true;
          }, 1000);
        }
      }
    });
  });
});




