
let active = true
const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
];



const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
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

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (active === true) {

        card.classList.toggle('turned')
        memoryGame.pickedCards.push(card)

        if (memoryGame.pickedCards.length === 2) {
          let result = memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))
          document.getElementById('pairs-clicked').textContent = memoryGame.pairsClicked
          document.getElementById('pairs-guessed').textContent = memoryGame.pairsGuessed

          if (result === false) {
            active = false
            setTimeout(() => {
              memoryGame.pickedCards[0].classList.toggle('turned')
              memoryGame.pickedCards[1].classList.toggle('turned')
              memoryGame.pickedCards = []
              active = true
            }, 1000)

          } else {
            let isFinished = memoryGame.checkIfFinished()
            if (isFinished === true) {
              document.querySelector('#memory-board').innerHTML = `<h1>You have won!</h1>`
            }
            memoryGame.pickedCards = []
          }
        }
      }
    })
  })
})






