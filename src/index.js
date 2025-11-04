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
const cardsShusffle = memoryGame.shuffleCards(cards);

window.addEventListener('load', (event) => {
  let html = '';
  cardsShusffle.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  function hiddenCards() {
    document.querySelectorAll('.card').forEach((card) => {      
      card.classList.remove('turned');
    });
  }

  function scoreTotal() {
    document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
    document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;

    if (memoryGame.checkIfFinished()) {
      document.getElementById('memory-board').innerHTML = "<div class='win'><p>YOU WON!!!</p></div>";
    }
  }

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  scoreTotal();

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (e) => {
      
      card.classList.add('turned');
      memoryGame.pickedCards.push(card.dataset.cardName);

      if (memoryGame.pickedCards.length === 2) {
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          setTimeout(hiddenCards, 1000);
          memoryGame.pairsGuessed = 0;
        }

        memoryGame.pickedCards = [];
      }

      scoreTotal();
    });
  });
});
