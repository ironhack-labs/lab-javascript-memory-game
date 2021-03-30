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
let count = 0

window.addEventListener('load', function (event) {
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

  const el = document.querySelectorAll('.card')
  el.forEach(function (card) {
    // he cambiado el formato de estas funciones como 50 veces: arrow, no arrow, con false, sin false
    // todo porque el toggle no funcionaba para atras por el pointer-event de CSS...
    card.addEventListener('click', function () {

      card.classList.toggle('turned')
      addCard(card)

    }, false)
  });

}, false);


function addCard(card) {

  memoryGame.pickedCards.push(card)
  console.log(memoryGame.pickedCards);

  if (memoryGame.pickedCards.length === 2) {
    let cardName1 = memoryGame.pickedCards[0].dataset.cardName
    let cardName2 = memoryGame.pickedCards[1].dataset.cardName
    console.log(cardName1);
    if (memoryGame.checkIfPair(cardName1, cardName2) === false) {

      setTimeout(() => {
        const el2 = document.querySelectorAll('.turned:not(.blocked)')
        console.log(el2);
        el2.forEach(card => {
          card.classList.remove("turned")
        });
      }, 1000)
    } else {
      if (memoryGame.isFinished()) {
        alert("Enhorabuena jabato")
      }
      memoryGame.pickedCards.forEach(elm => elm.classList.add("blocked"))
    }
    console.log(memoryGame.pairsGuessed);
    document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked
    document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed
    memoryGame.pickedCards = []
  }
}