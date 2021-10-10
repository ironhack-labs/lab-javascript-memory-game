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

function newGame() {
  const memoryGame = new MemoryGame(cards);
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
    pickedCards = memoryGame.pickedCards;

    card.addEventListener('click', () => {
      // if (memoryGame.checkIfFinished()) {
      //   if (confirm('Concratulations, you have won! New Game?')) {
      //     newGame();
      //   }
      // }
      if (pickedCards.length === 2) {
        if (memoryGame.checkIfPair(pickedCards[0], pickedCards[1])) {
          document.querySelectorAll('.turned').forEach((element) => {
            if (element.getAttribute('data-card-name') === pickedCards[0]) {
              element.classList.add('guessed');
            }
          });
        }
        document.querySelector('#pairs-guessed').textContent =
          memoryGame.pairsGuessed;
        document.querySelector('#pairs-clicked').textContent =
          memoryGame.pairsClicked;
        pickedCards = [];
        document.querySelectorAll('.turned').forEach((element) => {
          if (!element.classList.contains('guessed'))
            element.classList.remove('turned');
        });
      }

      card.classList.toggle('turned');
      pickedCards.push(card.getAttribute('data-card-name'));
    });
    //score board
  });
}

window.addEventListener('load', (event) => {
  newGame();
});
