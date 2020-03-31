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
]

const memoryGame = new MemoryGame(cards)

const pairsClicked = document.getElementById('pairs-clicked')
const pairsGuessed = document.getElementById('pairs-guessed')

window.addEventListener('load', event => {
  let html = ''
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  })

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html

  function pairCheck(pickedCardsArray) {
    if (memoryGame.checkIfPair(pickedCardsArray[0], pickedCardsArray[1])) {
      pairsClicked.innerText = memoryGame.pairsClicked
      pairsGuessed.innerText = memoryGame.pairsGuessed
    } else {
      pairsClicked.innerText = memoryGame.pairsClicked
      document
        .querySelectorAll('.card')
        .forEach(card => (card.classList = 'card'))
    }
    memoryGame.pickedCards = []
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList = 'card turned'
      memoryGame.pickedCards.push(card.dataset.cardName)
      if (memoryGame.pickedCards.length === 2) {
        pairCheck(memoryGame.pickedCards)
        console.log(
          `el valor del array de cartas elegidas del objeto es: ${memoryGame.pickedCards}`
        )
      }
    })
  })
})
