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
const turnedCards = document.querySelectorAll(".card .turned");

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

  // Functions
  function clickCard(card) {
    if (memoryGame.pickedCards.length < 2) {
      card.classList.add("turned");
      memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
      console.log("pickedCards:", memoryGame.pickedCards);
    } else return alert("You can only pick two cards!");
    if (memoryGame.pickedCards.length === 2) checkCards();
  }

  function checkCards() {
    console.log("...checking cards");
    document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked;
    let result = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);

    if (result) {
      document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed;
      turnedCards.forEach(card => card.classList.add("blocked"));

    } else {
      setTimeout(() => {
        turnedCards.forEach(card => card.classList.remove("turned"));
      }, 1500);
    }
    memoryGame.pickedCards = [];
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (event) => {
      // TODO: write some code here
      clickCard(card);
      console.log(`Card clicked: ${card}`);
      memoryGame.isFinished();
    });
  });
});
