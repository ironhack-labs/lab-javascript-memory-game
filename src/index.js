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
const updateScore = () => {
  const pairsClickedElem = document.querySelector('#pairs-clicked');
  const pairsGuessedElem = document.querySelector('#pairs-guessed');

  pairsClickedElem.textContent = memoryGame.pairsClicked;
  pairsGuessedElem.textContent = memoryGame.pairsGuessed;
}

memoryGame.shuffleCards();

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
      card.classList.toggle('turned');
      console.log(`Card clicked: ${card}`);
      
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

        if(memoryGame.checkIfPair(card1, card2)) {
          memoryGame.pickedCards[0].classList.toggle('blocked');
          memoryGame.pickedCards[1].classList.toggle('blocked');
          memoryGame.pickedCards = [];

          if(memoryGame.checkIfFinished()) {
            console.log('You won!!!');
          }
        } else {
        setTimeout(() => {
          memoryGame.pickedCards[0].classList.toggle('turned');
          memoryGame.pickedCards[1].classList.toggle('turned');
          memoryGame.pickedCards = [];
        }, 1000);
      }
    }
    updateScore();
    });
  });
});

memoryGame.checkIfFinished();
