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
  // memoryGame.shuffleCards();
  const correctPairs = document.getElementById('pairs-guessed');
  const triesPairs = document.getElementById('pairs-clicked');

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

  function scoreBoard() {
    correctPairs.innerHTML = memoryGame.pairsGuessed;
    triesPairs.innerHTML = memoryGame.pairsClicked;

    if (memoryGame.checkIfFinished()) {
      document.querySelector(
        '#memory-board'
      ).innerHTML = `<h1>We have a winner!</h1>`;
    }
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      //working here
      if (memoryGame.pickedCards.length < 2) {
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);
      } else {
        return false;
      }

      if (memoryGame.pickedCards.length == 2) {
        setTimeout(() => {
          let isPair = memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          );

          console.log(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
          if (!isPair) {
            memoryGame.pickedCards.forEach((cards) =>
              cards.classList.toggle('turned')
            );
          } else {
            cards.classList.toggle('turned');
          }
          memoryGame.pickedCards = [];
          scoreBoard();
        }, 1000);
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
