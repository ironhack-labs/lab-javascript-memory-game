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

function onClickCard(event) {
  if (memoryGame.pickedCards.length < 2) {
    const card = event.currentTarget;
    card.classList.toggle('turned');

    const equalAgainstLast = memoryGame.pickCard(card);
    if (memoryGame.pickedCards.length === 2) {
      setTimeout(() => {
        memoryGame.pickedCards.forEach(card => {
          if (equalAgainstLast) {
          console.log('equaals');
          card.classList.add('blocked');
          } else {
          card.classList.remove('turned');
          }
        })
        memoryGame.pickedCards = [];
        updateScore();

        if (memoryGame.isFinished()) {
          alert(`You won!!! score: ${memoryGame.pairsClicked}`);
        }
      }, 900);
    }
  }
}

function updateScore() {
  document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked;
  document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed;
}

window.addEventListener('load', () => {
  memoryGame.shuffleCards();
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
  document.querySelectorAll('.card')
    .forEach(card => card.addEventListener('click', onClickCard));

});