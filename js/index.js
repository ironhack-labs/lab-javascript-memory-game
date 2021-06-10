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
window.addEventListener('load', (event) => {
  console.log('memoryGame is loaded');
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

  function playRound(playedCard) {
    if (memoryGame.pickedCards.length < 2) {
      playedCard.classList.toggle('turned');
      memoryGame.pickedCards.push(playedCard);
    } else {
      console.log(`You cannot pick more than two cards`);
    }
  }

  function freezeCards() {
    memoryGame.pickedCards.forEach(
      (card) => (card.style.pointerEvents = 'none')
    );
  }

  function flipCards() {
    memoryGame.pickedCards.forEach((card) => card.classList.toggle('turned'));
  }

  function updateScoreDOM() {
    // Code to update score board
    // look onto the memoryGame object for values
    let pairsClickedReference = document.querySelector("#pairs-clicked");
    pairsClickedReference.innerText = memoryGame.pairsClicked;

    let pairsGuessedReference = document.querySelector("#pairs-guessed");
    pairsGuessedReference.innerText = memoryGame.pairsGuessed;

    let scoreReference = document.querySelector("#total-score");
    let score = (10 * pairsGuessedReference.innerText) - (pairsClickedReference.innerText - pairsGuessedReference.innerText);
    scoreReference.innerText = score;
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      playRound(event.currentTarget);
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');
        const pairGuessed = memoryGame.checkIfPair(card1, card2);
        updateScoreDOM();
      if (pairGuessed) {
        freezeCards();
        memoryGame.resetClickedPair();
        
      } else {
        setTimeout(() => {
          flipCards();
          memoryGame.resetClickedPair();
          
        }, 1000);
      }
      }
    });
  });
});
