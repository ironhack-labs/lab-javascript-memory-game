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

window.addEventListener('load', event => {
  memoryGame.shuffleCards()
  let html = ''
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`
    html += `<div class="back" name="${pic.img}"></div>`
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`
    html += `</div>`
  })

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html

  setTimeout(() => {
    document.querySelectorAll('.card').forEach(elm => {
      elm.classList.add('turned')
    })
  }, 1000)

  setTimeout(() => {
    document.querySelectorAll('.card').forEach(elm => {
      elm.classList.remove('turned')
    })
  }, 3000)

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      if (memoryGame.pickedCards.length === 2) {
      } else {
        card.classList.add('turned') // añade clase turned a la carta clickeada
        memoryGame.pickedCards.push(card.dataset.cardName) // añade el nombre del heroe al array pickedCards


        if (memoryGame.pickedCards.length === 2) { // cuando haya dos cartas dadas la vuelta (sin contar con los matches)
          setTimeout(() => {
            if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) { // si es match
              ++document.getElementById('pairs-guessed').innerText
              ++document.getElementById('pairs-clicked').innerText
              if (memoryGame.isFinished()) { // y si el juego ha terminad
                let win = `<h1>¡ENHORABUENA TEO, HAS GANADO CAMPEÓN!</h1><p>ponme buena nota ;)</p>`
                document.querySelector('#memory-board').innerHTML = win
              }
            } else { // si no es match
              ++document.getElementById('pairs-clicked').innerText
              const cards = document.querySelectorAll(`.turned`) // el array cards contiene todas las cartas con la clase .turned
              cards.forEach(elm => { // navegamos a traves de cards
                if (elm.dataset.cardName === memoryGame.pickedCards[0] || elm.dataset.cardName === memoryGame.pickedCards[1]) { // si es una de las picked
                  elm.classList.remove('turned') // volvemos a darle la vuelta
                }
              })
            }
            memoryGame.pickedCards = [] // reseteo picked cards
          }, 500)
        }
      }
    })
  })
})
