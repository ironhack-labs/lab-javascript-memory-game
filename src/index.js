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

//Create the cards
const memoryGame = new MemoryGame(cards);

function startGame() {
  memoryGame.shuffleCards()
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

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      clickCard(card)
    })
  })
}

function clickCard(card) {
  card.classList.add("turned")  
  memoryGame.pickedCards.push(card)

  if (memoryGame.pickedCards.length === 2) {
    //if both cards are same name (dataset.cardName)
    if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {
      memoryGame.pickedCards = []
      document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked
      document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed
    } else {
      setTimeout(() => {
      memoryGame.pickedCards[0].classList.remove("turned")
      memoryGame.pickedCards[1].classList.remove("turned")
      document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked
      memoryGame.pickedCards = []
      }, 500)
    }
  }
  if (memoryGame.checkIfFinished()) {
    setTimeout(() => {
    localStorage.reload()
    }, 500)
  }
}

startGame();
