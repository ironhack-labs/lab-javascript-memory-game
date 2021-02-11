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

let memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
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
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      addTurnedClass(card);
      addCardToPickedCards(card);
      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        let itsAPair = memoryGame.checkIfPair(card1, card2);
        if (itsAPair) {
          addBlockedClass(card1, card2);
        } else {
          const timeoutId = setTimeout(removeTurnedClass, 1500);
        }
      }
      memoryGame.isFinished();
    });
  });
});

function addTurnedClass(item) {
  item.classList.add("turned");
}

function addCardToPickedCards(item) {
  let cardName = item.getAttribute("data-card-name");
  for (let i = 0; i < cards.length; i++) {
    var heroCard = cards[i];
    if (heroCard.name === cardName) {
      memoryGame.pickedCards.push(heroCard);
      break;
    }
  }
}

function addBlockedClass(item1, item2) {
  let turnedCards = document.querySelectorAll('.card.turned');
  turnedCards.forEach(n => n.classList.add('blocked'));
  memoryGame.pickedCards = [];
}

function removeTurnedClass() {
  let turnedCards = document.querySelectorAll('.card.turned');
  for (let card of turnedCards) {
    if (card.classList.value.indexOf("blocked") === -1) {
      card.classList.remove('turned');
    }
  }
  memoryGame.pickedCards = [];
}