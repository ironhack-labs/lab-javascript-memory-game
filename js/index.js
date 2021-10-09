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
  let html = '';
  memoryGame.shuffleCards();
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
    card.addEventListener('click', (event) => {
      // Add the turned class to the card
      const currentCard = event.currentTarget;
      // if the pickCard array hold 0 or 1 cards, then push the currently clicked card
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(currentCard);
        currentCard.classList.add('turned');
      }
      //  If we have the 2 cards don't let click any of the cards
      if (memoryGame.pickedCards.length === 2) {
        // set the clicked pair's number
        const cardName1 = memoryGame.pickedCards[0].dataset.cardName;
        const cardName2 = memoryGame.pickedCards[1].dataset.cardName;
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        // if they are not matching, turn them back
        const matching = memoryGame.checkIfPair(cardName1, cardName2);
        document.getElementById('pairs-clicked').textContent =
          memoryGame.pairsClicked;
        if (!matching) {
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
          }, 1000);
        } else {
          document.getElementById('pairs-guessed').textContent =
            memoryGame.pairsGuessed;
        }
        // Check if the game is Finished
        if (memoryGame.checkIfFinished()) {
          setTimeout(() => {
            alert('You won!');
          }, 500);
        }
        // empty the pickedCard array
        memoryGame.pickedCards = [];
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
