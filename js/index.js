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

window.addEventListener('load', event => {

  memoryGame.shuffleCards()   // SHUFFLE CARDS

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
      card.classList.add('turned')

      document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed

      if (memoryGame.pickedCards.length < 2) { memoryGame.pickedCards.push(card) }

      if (memoryGame.pickedCards.length === 2) {

        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {     //  CHECK IF PAIR
          memoryGame.pickedCards[0].classList.toggle('blocked')
          memoryGame.pickedCards[1].classList.toggle('blocked')
          memoryGame.pickedCards = []
        }
        else {
          let firstCard = memoryGame.pickedCards[0]
          let secondCard = memoryGame.pickedCards[1]
          setTimeout(() => { firstCard.classList.remove('turned'); secondCard.classList.remove('turned') }, 700)
          memoryGame.pickedCards = []
        }
      }

      if (memoryGame.isFinished()) {          //  IS FINISHED FUNCTION

        setTimeout(() => {

          //  RESET BOARD
          document.querySelectorAll('.blocked').forEach(blockedCard => {
            blockedCard.setAttribute('class', 'card')
          })
        }, 500)

        //  WINNER MESSAGE
        setTimeout(() => { alert('YOU ARE A BEAST!!') }, 500)

        //  RESET SCORES
        memoryGame.pairsGuessed = 0
        memoryGame.pairsClicked = 0
        setTimeout(() => {
          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
        }, 500)

      }
    })

  })

})

