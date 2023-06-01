// @ts-nocheck
console.log("index.js loaded successfully")

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
    `
  })

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html

  // Check if pair
  function checkPair() {
    if (memoryGame.pickedCards.length === 2) {
      memoryGame.pairsClicked--
      const isPair = memoryGame.checkIfPair(
        memoryGame.pickedCards[0].getAttribute("data-card-name"),
        memoryGame.pickedCards[1].getAttribute("data-card-name")
      )
      if (isPair) {
        memoryGame.pickedCards.shift()
        memoryGame.pickedCards.shift()
        memoryGame.pairsGuessed++
        document.querySelector("#pairs-guessed").innerHTML =
          memoryGame.pairsGuessed / 2
      } else {
        memoryGame.pickedCards.forEach((card) => {
          card.setAttribute("class", "card")
          memoryGame.pickedCards = []
        })
      }
    }
  }

  const youWin = () => { if (memoryGame.pairsGuessed / 2 === 12) console.log("You won!") }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card)
        card.setAttribute("class", "card turned")
        
        memoryGame.pairsClicked++
        document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked
      }
      setTimeout(checkPair, 1300)
      setTimeout(youWin, 1500)
    })
  })
})
