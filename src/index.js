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
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-cardname="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}); no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  const pairsClick = document.querySelector('#pairs-clicked');
  const pairsGuess = document.querySelector('#pairs-guessed');
  let turnedCards = [];
  let click = 0;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      click++;
      pairsClick.innerHTML = click;
      if (!turnedCards.length) {
        card.classList.add('turned');
        turnedCards.push(card);
      } else {
        card.classList.add('turned');
        turnedCards.push(card);

        let pair = memoryGame.checkIfPair(turnedCards[0].dataset.cardname, turnedCards[1].dataset.cardname);

        if (pair) {
          pairsGuess.innerHTML = memoryGame.pairsGuessed;
          turnedCards = [];
        } else {
          setTimeout(() => {
            turnedCards.forEach((turnedCard) => {
              turnedCard.classList.remove('turned');
            });
            turnedCards = [];
          }, 1000);
        }

        if(memoryGame.checkIfFinished()) {
          restartGame();
        }
      }
    });
  });  
});


/******************* Extra **********************/

/*
If you win the game call this function to add a button and animation 
also add the logic to reload the page and star the game again.
*/
function restartGame() {
  const buttonRestart = `
    <div class="container animation">
      <button class="restartButton">RESTART</button>
    </div>
  `;
  
  const mmBoard = document.querySelector('#memory-board');
  mmBoard.innerHTML += buttonRestart;

  const winMessage = document.createElement('div');
  winMessage.classList.add('win-message');
  winMessage.innerHTML = `
    <p class="shining-text"></p>
  `;

  document.body.appendChild(winMessage);

  const restart = document.querySelector('.restartButton');
  restart.addEventListener('click', () => {
    location.reload();
  });
}
