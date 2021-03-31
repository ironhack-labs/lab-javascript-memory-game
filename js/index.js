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
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  const pairsClickedDOM = document.querySelector('#pairs-clicked');
  const pairsGuessedDOM = document.querySelector('#pairs-guessed');

  let dowait = false;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!dowait) {
        memoryGame.pickedCards.push(card);
        card.classList.toggle('turned', true);
        if (memoryGame.pickedCards.length == 2) {
          dowait = true;
          setTimeout(() => {
            let checkIfPair = memoryGame.checkIfPair(
              memoryGame.pickedCards[0].getAttribute('data-card-name'),
              memoryGame.pickedCards[1].getAttribute('data-card-name')
            );
            if (!checkIfPair) {
              memoryGame.pickedCards[0].classList.toggle('turned', false);
              memoryGame.pickedCards[1].classList.toggle('turned', false);
            }
            pairsClickedDOM.innerText = memoryGame.pairsClicked;
            pairsGuessedDOM.innerText = memoryGame.pairsGuessed;
            memoryGame.pickedCards.length = 0;
            dowait = false;
            if (memoryGame.isFinished()) {
              document.querySelector('#score h2').innerText = 'YOU WIN!!!';
            }
          }, 1000);
        }
      }
    });
  });
});
