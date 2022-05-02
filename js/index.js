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

document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;

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

      card.className = 'card turned';
      memoryGame.pickedCards.unshift(card);
      // let currentGame = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
      if (memoryGame.pickedCards.length % 2 == 0) {
        let currentGame = memoryGame.checkIfPair(
          memoryGame.pickedCards[0].dataset.cardName,
          memoryGame.pickedCards[1].dataset.cardName
        );
        if (currentGame === false) {
          setTimeout(() => {
            console.log(memoryGame.pickedCards[0].hasAttributes()),
              (memoryGame.pickedCards[0].className = 'card');
            memoryGame.pickedCards[1].className = 'card';
          }, 1000);
        }
      }
      document.getElementById(
        'pairs-clicked'
      ).innerHTML = `${memoryGame.pairsClicked}`;
      document.getElementById(
        'pairs-guessed'
      ).innerHTML = `${memoryGame.pairsGuessed}`;
    });
  });
});

