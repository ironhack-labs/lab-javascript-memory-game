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
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;


  // Update pairs clicked and guessed
  function updateNumbers() {
    let currentPairsClicked = memoryGame.pairsClicked;
    let currentPairsGuessed = memoryGame.pairsGuessed;
    let pairsClicked = document.getElementById('pairs-clicked');
    let pairsGuessed = document.getElementById('pairs-guessed');
    pairsClicked.innerHTML = `${currentPairsClicked}`;
    pairsGuessed.innerHTML = `${currentPairsGuessed}`;
  }


  // Variable to block game until cards are turned down
  let blocked = false;


  // Check if two cards are equal or not
  function checkTwoTurned() {

    if (memoryGame.pickedCards.length === 2) {
      const card1 = memoryGame.pickedCards[0];
      const card2 = memoryGame.pickedCards[1];

      // If clicked cards are equal
      if (memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'))) {
        memoryGame.pickedCards = [];
        if (memoryGame.checkIfFinished()) {
          setTimeout(() => {
            alert('You won!!!');
          }, 1000);
        }

        // If clicked cards are not equal
      } else {
        blocked = true;
        setTimeout(() => {
          card1.setAttribute('class', 'card');
          card2.setAttribute('class', 'card');
          memoryGame.pickedCards = [];
          blocked = false;
        }, 1000);
      }
      updateNumbers();
    }
  }


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      if (blocked === false) {
        card.setAttribute('class', 'card turned');
        memoryGame.pickedCards.push(card);
        checkTwoTurned();
      }
    });
  });
});
