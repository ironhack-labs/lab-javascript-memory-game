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
    card.addEventListener('click', () => {
      // TODO: write some code here
      // console.log(`Card clicked: ${card}`);

      // Turn card if it is not blocked (blocked cards are right guessed ones)
      card.classList.toggle('turned', !card.className.includes('blocked'));

      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
      }

      if (memoryGame.pickedCards.length == 2) {
        // compare the cards using their name
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'),
          memoryGame.pickedCards[1].getAttribute('data-card-name'))) {
          memoryGame.pickedCards[0].classList.add('blocked')
          memoryGame.pickedCards[1].classList.add('blocked')
        } else {
          // TODO: figure out why setTimeout not working properly
          // (not getting the memoryGame.pickedCards)          
          flipAfterTimeout(memoryGame.pickedCards)
        }
        // empty the picked cards array
        memoryGame.pickedCards = [];
      }

      document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
      document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;

      if (memoryGame.checkIfFinished()) {
        console.log("----GAME FINISHED---")
        alert(`Game finished. You managed with ${memoryGame.pairsClicked} attempts`);
      }
    });
  });
});

// helper function to get setTimeout to work properly
// assumes the cardsArray has exactly 2 card elements
function flipAfterTimeout(cardsArray) {
  setTimeout(() => {
    cardsArray[0].classList.toggle('turned');
    cardsArray[1].classList.toggle('turned');
  }, 1000)
}