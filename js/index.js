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
          block(card1, card2);
        } else {
          removeTurnedClass(card1, card2);
        }
      }
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
  console.log(memoryGame.pickedCards);
}

function block(item1, item2) {
  console.log(item1);
  console.log(item2);
  let turnedCards = document.querySelectorAll('.card.turned');
  console.log(turnedCards[0].classList);
  turnedCards.forEach(n => n.classList.add('blocked'));
  
  
}

function removeTurnedClass(item1, item2) {
  console.log(item1);
  console.log(item2);
  let turnedCards = document.querySelectorAll('.card.turned');
  // set timeout for this.
  turnedCards.forEach(n => n.classList.remove('turned'));
}