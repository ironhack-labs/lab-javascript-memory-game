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
    card.addEventListener('click', () => {
      // TODO: write some code here
      // Add class 'turned' to a card, is turned and pushed into the array pickedCards
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);
      // Case when we have selected 2 cards
      if (memoryGame.pickedCards.length == 2) {
        // Save the name of both cards
        let firstCard = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let secondCard = memoryGame.pickedCards[1].getAttribute('data-card-name');
        // Case we have a pair
        if (memoryGame.checkIfPair(firstCard, secondCard)) {
          // Increment clicked and guessed counters and restart pickedCArds array
          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];
          // Dsiplay a message if the game is finished
          setTimeout(endGame, 1000);
        // Case we don't have a pair
        } else {
          // Increment clicked counter
          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
          // Apply a timeout in order to have time to see the second card turned before turning again the selected cards and restart pickedCards array
          setTimeout(restartPickedCards, 500);
          function restartPickedCards() {
            memoryGame.pickedCards.forEach(card => card.classList.remove('turned'));
            memoryGame.pickedCards = [];
          }
        }
      }    
    });
  });
});

// Final message function
function endGame() {
  if (memoryGame.isFinished()) {
    // Hide memory board and score
    document.querySelector('#memory-board').style.display = 'none';
    document.querySelector('#score').style.display = 'none';
    // create new h1 element and append it into the body
    const h1Tag = document.createElement('h1');
    h1Tag.style.fontSize = '86px';
    h1Tag.style.color = 'gold';
    h1Tag.style.paddingTop = '10%';
    h1Tag.innerHTML = `End Game<br>Your final score is: ${memoryGame.pairsClicked}`;
    document.body.appendChild(h1Tag);
  }
}