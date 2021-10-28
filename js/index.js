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
  memoryGame.shuffleCards();
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
  const pairsClicked = document.getElementById('pairs-clicked');
  const pairsGuessed = document.getElementById('pairs-guessed');
  const win = document.getElementById('win');
  const play = document.getElementById('play');
  let pikedCard;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('turned');
      setTimeout(() => {
        if (pikedCard === undefined) {
          pikedCard = card;
        } else {
          if (
            memoryGame.checkIfPair(
              pikedCard.dataset.cardName,
              card.dataset.cardName
            )
          ) {
            pikedCard.classList.add('blocked');
            card.classList.add('blocked');
            pikedCard = undefined;
            pairsClicked.innerHTML = memoryGame.pairsClicked;
            pairsGuessed.textContent = memoryGame.pairsGuessed;
            if (memoryGame.checkIfFinished()) {
              winDisplay();
            }
          } else {
            pairsClicked.innerHTML = memoryGame.pairsClicked;
            pikedCard.classList.remove('turned');
            card.classList.remove('turned');
            pikedCard = undefined;
          }
        }
      }, 1000);
    });
  });
});
function winDisplay() {
  win.classList.remove('hidden');
  win.classList.add('display');
  play.classList.remove('display');
  play.classList.add('hidden');
  win.addEventListener('click', () => {
    memoryGame.shuffleCards();
    win.classList.remove('display');
    win.classList.add('hidden');
    play.classList.add('display');
    play.classList.remove('hidden');
  });
  memoryGame.pickedCards = [];
  memoryGame.pairsGuessed = 0;
  memoryGame.pairsClicked = 0;
  const allCards = document.querySelectorAll('.turned');
  allCards.forEach((card) => {
    card.classList.remove('turned');
  });
}
