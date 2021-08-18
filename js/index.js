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

let turn = []

// function cardTurn() {
//   memoryGame.checkPair()

// }
function pickCard(card) {
  card.setAttribute('class', 'card turned')
}

function isEqualsCard(jugadas) {
  if (memoryGame.checkIfPair(jugadas[0], jugadas[1])) {
    console.log("iguales")
  } else {
    console.log("no Equals")
    turn.pop()
    turn.pop()
  }
  // console.log(memoryGame.checkIfPair(jugadas[0], jugadas[1]))
}

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
    card.addEventListener('click', () => {

      // memoryGame.checkPair()
      pickCard(card)

      let cardName = card.getAttribute("data-card-name")
      // compareNameImages( card.getAttribute("data-card-name"))
      if (turn.length < 2) {
        turn.push(card.getAttribute("data-card-name"))

        isEqualsCard(turn)
        console.log(card.getAttribute("data-card-name"))
      }
      console.log(turn)

      // let cardItem = document.getElementsByName(`${car}`)
      // TODO: write some code here
      // console.log(`Card clicked: ${card}`);

    });
  });
});
