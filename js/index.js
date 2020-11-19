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

let card1 = ""
let card2 = ""
let cardsTurned = 0;
let started = false;
let timer = 1000;
const timerButton1 = document.getElementById('time1')
const timerButton2 = document.getElementById('time2')
const resetButton = document.getElementById('reset')

const chronometer = new Chronometer();
const memoryGame = new MemoryGame(cards);

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // let minutes = chronometer.getMinutes()
  // let twoDigitMinutes = chronometer.twoDigitsNumber(minutes)
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())

  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}
function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}


function drawBoard() {
  card1 = ""
  card2 = ""
  cardsTurned = 0;
  memoryGame.pairsClicked = 0;
  memoryGame.pairsGuessed = 0;
  memoryGame.shuffleCards(cards)
  let html = '';

  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  
  document.querySelector('#memory-board').innerHTML = html;
}


resetButton.addEventListener('click', () => {
  // window.addEventListener
  chronometer.stopClick()
  chronometer.resetClick()
  printTime();
  drawBoard()
  buttonsListener()
})

timerButton1.addEventListener('click', () => {
  timer = 1000
  timerButton1.className = timerButton1.className.replace("time", 'time pressed');
  timerButton2.className = timerButton2.className.replace(' pressed', '');
}
)
timerButton2.addEventListener('click', () => {
  timerButton2.className = timerButton2.className.replace("time", 'time pressed');
  timerButton1.className = timerButton1.className.replace(' pressed', '');
  timer = 2000
}
)

const clearCards = function () {
  setTimeout(function () {
    let card1 = document.getElementById('card1')
    let card2 = document.getElementById('card2')
    card1.className = card1.className.replace(' turned', '');
    card2.className = card2.className.replace(' turned', '');
    card1.removeAttribute('id')
    card2.removeAttribute('id')
    card1 = ""
    card2 = ""
    cardsTurned = 0
  }, timer)
}

const buttonsListener = function() {

  document.querySelectorAll('.card').forEach(card => {
    
    card.addEventListener('click', () => {


      started = chronometer.state;

      if (!started) { chronometer.startClick(printTime) }

      if (cardsTurned === 0 && card.className === 'card') {
        card.className += ' turned';
        card.id = 'card1'
        cardsTurned = 1;
        card1 = card
      }

      else if (cardsTurned === 1 && card.className === 'card') {
        card.className += ' turned';
        card.id = 'card2'
        cardsTurned = 2;
        card2 = card;
        const resultat = memoryGame.checkIfPair(card1.dataset.cardName, card2.dataset.cardName);
        if (!resultat) { clearCards(); }
      }

      if (cardsTurned === 2 && card1.dataset.cardName === card2.dataset.cardName) {
        card1.id = "linked"
        card2.id = "linked"

        cardsTurned = 0;

      }

      if (memoryGame.isFinished()) {
        let minutes = chronometer.getMinutes()
        let twoDigitMinutes = chronometer.twoDigitsNumber(minutes)
        let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
        chronometer.stopClick()

        printResult = `You finished the game with ${memoryGame.pairsClicked} pairs of cards raised; in ${twoDigitMinutes[0]}${twoDigitMinutes[1]}:${seconds[0]}${seconds[1]}, what it supposes ${Math.round(chronometer.currentTime / memoryGame.pairsGuessed * 100) / 100} seconds each card couple.`
        const element = document.getElementById('result')
        const pElem = document.createElement('p');
        pElem.innerText = printResult;
        element.appendChild(pElem);
      }

      let pairsClicked = document.querySelector('#pairs-clicked')
      pairsClicked.innerText = memoryGame.pairsClicked
      let pairsGuessed = document.querySelector('#pairs-guessed')
      pairsGuessed.innerText = memoryGame.pairsGuessed

    });

  });
  
}

window.addEventListener('load', event => {


  drawBoard()
  buttonsListener()
}


);

var node = document.getElementsByTagName('div');
var divLength = node.length;
var randomDiv = Math.random() * divLength;

