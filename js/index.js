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

let blocked1 = []
let blocked2 = []

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
      // TODO: write some code here
      card.classList.toggle('turned')
      
      memoryGame.pickedCards.push(card)

      // if (checkIfPair)

      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName) == 0)
        {
          setTimeout(function () {
            memoryGame.pickedCards.forEach(elm =>
              elm.classList.remove('turned')
            )
            memoryGame.pickedCards = []
          }, 2000)
            
        }
        else
          memoryGame.pickedCards = []
      }
      document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked 
      document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed 
      if (memoryGame.isFinished() === true)
      {
        setTimeout(function () {
          alert("ENHORABUENA! Lo has conseguido! Intentalo de nuevo")
        }, 500)
        setTimeout(function () {
          location.reload()
        }, 3000)
      }
    });
  });
});
