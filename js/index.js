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

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards(cards)
  let html = '';
  console.log(html)
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  })


  //-----------------------DOM STUFF------------------------------------//
  const pairsClickedCounter = document.querySelector('#pairs-clicked')
  const pairsGuessedCounter = document.querySelector('#pairs-guessed')
  document.querySelector('#memory-board').innerHTML = html;
  //-----------------------EVENTS---------------------------------------//
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      if (memoryGame.pickedCards.length < 2) {

        card.setAttribute("class", "card turned")

        memoryGame.pickedCards.push(card)
        let firstSelection = memoryGame.pickedCards[0]
        let secondSelection = memoryGame.pickedCards[1]

        if (memoryGame.pickedCards.length == 2) {

          let pairChecker = memoryGame.checkIfPair(firstSelection.dataset.name, secondSelection.dataset.name)
          pairsClickedCounter.innerHTML = memoryGame.pairsClicked
          if (pairChecker == false) {

            let id = setTimeout(() => {
              memoryGame.pickedCards[0].setAttribute("class", "card")
              memoryGame.pickedCards[1].setAttribute("class", "card")
              memoryGame.pickedCards = []
            }, 1000)
          }
          else if (pairChecker == true) {

            firstSelection.setAttribute("class", "card turned blocked")
            secondSelection.setAttribute("class", "card turned blocked")
            pairsGuessedCounter.innerHTML = memoryGame.pairsGuessed
            memoryGame.pickedCards = []

          }
          if (memoryGame.pairsClicked == 30) {
            alert(`WOW....${memoryGame.pairsClicked} tries, focus!`)
          }
          if (memoryGame.checkIfFinished()) {

            alert("YOU FREAKING WONNNNNN!. PRESS OK TO RESTART!:D")
            let id2 = setTimeout(() => {
              location.reload() //  ¯\_(ツ)_/¯ no more creativity at this hours
            }, 2000)

          }

        }
      }
    })
  })
})