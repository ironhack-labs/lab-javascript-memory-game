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

let pairsClicked = 0
let pairsClickedSpan = document.getElementById('pairs-clicked')
let pairsGuessed = 0
let pairsGuessedSpan = document.getElementById('pairs-guessed')

const memoryGame = new MemoryGame(cards);
// memoryGame.shuffleCards()
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
    card.addEventListener('click', (event) => {
      // TODO: write some code here
      flipCard(card)
     });
  });
});

function flipCard(card) {
  card.classList.add('turned')
  console.log(card)
  memoryGame.pickedCards.push(card)
  if (memoryGame.pickedCards.length === 2) {
    if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
      console.log('cartas iguales')
      addToPairsGuessed()
     if( memoryGame.isFinished() ){
      setTimeout(congratulationMessage, 1000)
     }
    } else {
      memoryGame.pickedCards[0]
      console.log('intenta otra vez')
    }
    addToPairsClicked()
    memoryGame.pickedCards = []
  }
}

function unFlipCards(card) {
  setTimeout(() => {
    card.classList.remove('turned')
  }, 1000)
}

function addToPairsClicked() {
  pairsClicked++
  pairsClickedSpan.innerText = pairsClicked
}

function addToPairsGuessed() {
  pairsGuessed++
  pairsGuessedSpan.innerText = pairsGuessed
}

function congratulationMessage (){
  const board = document.getElementById('memory-board')
  board.innerHTML = `<h1>Congratulations!</h1>`
}