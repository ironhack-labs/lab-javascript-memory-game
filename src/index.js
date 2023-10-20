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
let cont = 1
let value1 = ""
let value1class = ""
let value2 = ""
let value2class = ""


window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-cardname="${pic.name}">
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
      card.classList.add("turned")
      if (cont === 1) {
        value1 = card.dataset.cardname
        value1class = card.classList
        cont++
      } else if (cont === 2) {
        value2 = card.dataset.cardname
        value2class = card.classList
        setTimeout(() => {
          if (memoryGame.checkIfPair(value1, value2)) {
            cont = 1
          } else {
            cont = 1
            value1class.remove("turned")
            value2class.remove("turned")
          }
        }, "500");
      }
    });
  });
});
