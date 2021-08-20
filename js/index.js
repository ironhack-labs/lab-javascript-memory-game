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

let blockedBoard = false;

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

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      //////////////////////////////////////////////////////////////

      if (blockedBoard) {
        return;
      }

      let elementSumarPunto = document.querySelector('#pairs-guessed');
      let elementSumarIntento = document.querySelector('#pairs-clicked');

      if (memoryGame.pickedCards.length < 2) {
        card.className = 'card turned';
        memoryGame.pickedCards.push(card);
      }
      if (memoryGame.pickedCards.length === 2) {
        let card1Name =
          memoryGame.pickedCards[0].getAttribute('data-card-name');
        let card2Name =
          memoryGame.pickedCards[1].getAttribute('data-card-name');
        blockedBoard = true;

        if (memoryGame.checkIfPair(card1Name, card2Name)) {
          memoryGame.pickedCards[0].classList.add('blocked'); //'card turned blocked sin add
          memoryGame.pickedCards[1].classList.add('blocked');
          memoryGame.pickedCards = [];
          blockedBoard = false;
        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards = [];
            blockedBoard = false;
          }, 500);
        }
        elementSumarPunto.innerHTML = memoryGame.pairsGuessed;
        elementSumarIntento.innerHTML = memoryGame.pairsClicked;
      }

      if (memoryGame.checkIfFinished()) {
        setTimeout(() => {
          alert('HAS GANADO');
        }, 500);
      }
    });
  });
});

// let clickedCards = card.querySelectorAll('card turned');
// if (clickedCards.length > 2)
//   clickedCards.forEach((card) => {
//     card.classList.remove('turned');
//   });
// // if ((pickedCards.length = 2)) {
//   checkIfPair(pickedCards[0], pickedCards[1]);
// }
// if (checkIfPair(card1, card2) === false) {
//   card.classList.remove('turned');
// }
// console.log(selectedCards);

// memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
