const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

const memoryGame = new MemoryGame(cards);

//Shuffle them cardsssss:
memoryGame.shuffleCards()

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
      console.log(`Card clicked: ${card}`)
      card.setAttribute('class', 'card turned')
      switch (memoryGame.pickedCards.length) {

        case 0:
          memoryGame.pickedCards.push(card)
          console.log(memoryGame.pickedCards)
          break
        
        case 1:
          memoryGame.pickedCards.push(card)
          console.log(memoryGame.pickedCards)
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {
            console.log('Son iguales!')
            memoryGame.pickedCards = []
          }
          else {
            console.log('No son iguales...')
          }
          break
        
        case 2:
          memoryGame.pickedCards.forEach(elm => {
              elm.setAttribute('class', 'card')
          })
          memoryGame.pickedCards = []
          memoryGame.pickedCards.push(card)
          console.log(memoryGame.pickedCards)
          break
      }
      document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked
      document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed
      if (memoryGame.isFinished()) {
        console.log('YOU WIN! Final Score:')
        console.log(`${memoryGame.pairsClicked} clicks`)
        launchWinScreen(memoryGame.pairsClicked)
      }
    })
  })
})

function launchWinScreen(clicks) {
  document.querySelector('#memory-board').innerHTML = ''
  const winScreen = document.createElement('div')
  winScreen.setAttribute('id', 'winScreen')
  winScreen.style.backgroundColor = "rgba(24, 114, 29, 0.4)"
  winScreen.style.height = "300px"
  winScreen.style.border = "solid 1px green"
  winScreen.style.borderRadius = "20px"
  const youWin = document.createElement('h1')
  const youWinText = document.createTextNode('You Win!!!')
  const score = document.createElement('h2')
  scoreTextLit = 'Score: ' + clicks
  const scoreText = document.createTextNode(scoreTextLit)
  score.appendChild(scoreText)
  youWin.appendChild(youWinText)
  winScreen.appendChild(youWin)
  winScreen.appendChild(score)
  document.querySelector('#memory-board').appendChild(winScreen)
}