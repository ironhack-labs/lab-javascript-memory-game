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

  const cardsSelected = memoryGame.pickedCards;
  let useStateTurned = false;
  let checkIfPair = false;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!useStateTurned) {
        turnedCards();
      }
    });
    function turnedCards() {
      card.classList.add("turned");
      if (cardsSelected.length === 0) {
        memoryGame.pickedCards.push(card);
      } else {
        memoryGame.pickedCards.push(card);
        useStateTurned = true;
      }
      // - When click 2 cards
      if (cardsSelected.length === 2) {
        checkIfPair = memoryGame.checkIfPair(
          cardsSelected[0].getAttribute("data-card-name"),
          cardsSelected[1].getAttribute("data-card-name")
        );
        if (!checkIfPair) {
          setTimeout(() => {
            cardsSelected[0].classList.remove("turned");
            cardsSelected[1].classList.remove("turned");
            cardsSelected[0] = undefined;
            cardsSelected[1] = undefined;
            useStateTurned = false;
            memoryGame.pickedCards.pop([0]);
            memoryGame.pickedCards.pop([1]);
          }, 3000);
        } else {
          memoryGame.pickedCards.pop([0]);
          memoryGame.pickedCards.pop([1]);
          useStateTurned = false;
        }
      }
      // - Add Clicked Pairs
      const pairsClicked = document.getElementById("pairs-clicked");
      pairsClicked.textContent = memoryGame.pairsClicked.toString();
      // - Add Pairs Guessed
      const pairsGuessed = document.getElementById("pairs-guessed");
      pairsGuessed.textContent = memoryGame.pairsGuessed.toString();
      // - When the Game Finished
      if (memoryGame.checkIfFinished()) {
        setTimeout(() => {
          alert("YOU ARE A HERO!!");
        }, 1000);
      }
      // Esto es un intento de usar toggle, hablando con Pool esto es lo mejor que se nos ocurrio pero no nos parecia elegante asi que lo dejo aqui para que me digan como sería la manera correcta de hacerlo con toggle
      // const isBack = card.children[0].className === "back";
      // const isBack2 = card.children[1].className === "back";
      // card.children[0].classList.toggle("front", isBack);
      // card.children[0].classList.toggle("back", !isBack);
      // card.children[1].classList.toggle("front", isBack2);
      // card.children[1].classList.toggle("back", !isBack2);
    }
  });
});
