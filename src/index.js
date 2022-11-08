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

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (memoryGame.pickedCards.length === 0 || memoryGame.pickedCards.length === 1) {
        card.classList.toggle("turned");
        memoryGame.pickedCards.push(card);
      } 
      if (memoryGame.pickedCards.length === 2) {
        let match = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
        const clicked = document.getElementById("pairs-clicked");
        clicked.innerHTML = memoryGame.pairsClicked;
        if (match) {
          const guessed = document.getElementById("pairs-guessed");
          guessed.innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards[0].classList.toggle("blocked");
          memoryGame.pickedCards[1].classList.toggle("blocked");
          memoryGame.pickedCards = [];
          if (memoryGame.checkIfFinished()) {
            const node = document.createElement("h2");
            const textnode = document.createTextNode("YOU WON!!!");
            node.appendChild(textnode);
            document.getElementById("score").appendChild(node);
          }
        } 
        else {
          memoryGame.pickedCards[0].classList.toggle("turned");
          memoryGame.pickedCards[1].classList.toggle("turned");
          memoryGame.pickedCards = [];
        }
      }
    });
  });
});

