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
      <div class="card " data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let lastSelectedCard = null;
  let isAllowedClicks = true;
  let pairsClickedElement = document.querySelector('#pairs-clicked');
  let pairsGuessedElement = document.querySelector('#pairs-guessed');
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (isAllowedClicks === true) {
        card.classList.toggle('turned');

        if (lastSelectedCard === null) {
          lastSelectedCard = card;
        } else {
          let isPair = memoryGame.checkIfPair(
            card.getAttribute('data-card-name'),
            lastSelectedCard.getAttribute('data-card-name')
          );
          pairsClickedElement.innerHTML = memoryGame.pairsClicked;
          if (isPair) {
            pairsGuessedElement.innerHTML = memoryGame.pairsGuessed;
            lastSelectedCard = null;
            if (memoryGame.checkIfFinished()) {
              alert('You Won!');
            }
          } else {
            isAllowedClicks = false;
            setTimeout(() => {
              card.classList.toggle('turned', false);
              lastSelectedCard.classList.toggle('turned', false);
              isAllowedClicks = true;
              lastSelectedCard = null;
            }, 500);
          }
        }
      }
    });
  });
});
