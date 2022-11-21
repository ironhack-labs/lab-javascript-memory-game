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
let pairsClicked = document.querySelector('#pairs-clicked');
let pairsGuessed = document.querySelector('#pairs-guessed');

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
    card.addEventListener('click', (elem) => {
      // TODO: write some code here
      if (memoryGame.pickedCards.length < 2) {
        elem.target.parentElement.classList.add('turned');
        memoryGame.pickedCards.push(elem.target);
      }

      if (memoryGame.pickedCards.length == 2) {
        let card1 = memoryGame.pickedCards[0].parentElement;
        let card2 = memoryGame.pickedCards[1].parentElement;

        if (
          !memoryGame.checkIfPair(
            card1.getAttribute('data-card-name'),
            card2.getAttribute('data-card-name')
          )
        ) {
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
          }, 1500);
        }

        pairsClicked.innerHTML = memoryGame.pairsClicked;
        pairsGuessed.innerHTML = memoryGame.pairsGuessed;

        if (memoryGame.checkIfFinished()) console.log('YOU WOOOOOOON');

        memoryGame.pickedCards = [];
      }
    });
  });
});
