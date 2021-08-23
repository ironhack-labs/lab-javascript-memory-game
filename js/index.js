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
    memoryGame.shuffleCards();
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
      const pairsClicked = document.querySelector('#pairs-clicked');
      const pairsGuessed = document.querySelector('#pairs-guessed');

      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
        card.classList.toggle('turned', card);
      }

      if (memoryGame.pickedCards.length === 2) {
        const cardName1 = memoryGame.pickedCards[0];
        const cardName2 = memoryGame.pickedCards[1];

        let areEqual = memoryGame.checkIfPair(
          cardName1.getAttribute('data-card-name'),
          cardName2.getAttribute('data-card-name')
        );

        if (areEqual) {
          memoryGame.pickedCards = [];
          cardName1.classList.toggle('blocked', card);
          cardName2.classList.toggle('blocked', card);
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
          memoryGame.checkIfFinished();
        } else {
          setTimeout(() => {
            memoryGame.pickedCards = [];
            cardName1.className = 'card';
            cardName2.className = 'card';
          }, 500);
        }
      }

      if (memoryGame.checkIfFinished()) {
        setTimeout(() => {
          alert('You won!!!');
        }, 500);
      }

      pairsClicked.innerHTML = memoryGame.pairsClicked;

      console.log(`Card clicked: ${card}`);
    });
  });
});
