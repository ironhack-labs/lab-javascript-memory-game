const chronometer = new Chronometer();

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');



function printTime() {

  printMinutes();
  printSeconds();

}

function printMinutes() {
  let minutes = chronometer.getMinutes()
  let twoDigitMinutes = chronometer.twoDigitsNumber(minutes)
  minDec.innerText = twoDigitMinutes[0];
  minUni.innerText = twoDigitMinutes[1];
}
function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}


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



const button = document.getElementById('reset')
button.addEventListener('click', () => {

  window.addEventListener

  chronometer.stopClick()
  chronometer.resetClick()
  printTime();
  let card1 = ""
  let card2 = ""
  let cardsTurned = 0;
  memoryGame.pairsClicked = 0;
  memoryGame.pairsGuessed = 0;
  // pairsClicked.innerText = '0'
  // pairsGuessed.innerText = '0'
  memoryGame.shuffleCards(cards)
  document.querySelectorAll('.card').forEach(card => {
    card.className = card.className.replace(' turned', '');
    card.className = card.className.replace(' linked', '');

  })
})



  const memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards(cards)

  window.addEventListener('load', event => {
    let html = '';

    memoryGame.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="back" name="${pic.img}"></div>`;
      html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
      html += `</div>`;
    });

    document.querySelector('#memory-board').innerHTML = html;

    let card1 = ""
    let card2 = ""
    let cardsTurned = 0;



    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {

        const checkPaused = function () { if (started && cardsTurned === 0) { chronometer.stopClick() } }

        let started = chronometer.state;

        if (!started) { chronometer.startClick(printTime) }

        if (cardsTurned === 0 && card.className === 'card') {
          card.className += ' turned';
          cardsTurned = 1;
          card1 = card

        }
        else if (cardsTurned === 1 && card.className === 'card') {
          card.className += ' turned';
          cardsTurned = 2;
          card2 = card;
          turnedCards = document.querySelectorAll('.tunned');
          memoryGame.checkIfPair(card1.dataset.cardName, card2.dataset.cardName);

        }
        else if (card.className.includes('turned')) {
          if (card.className.includes('linked')) { }

          else {
            card.className = card.className.replace(' turned', '');
            card1 = ""
            card2 = ""
            cardsTurned = cardsTurned - 1
            checkPaused();
          }
        }
        if (cardsTurned === 2 && card1.dataset.cardName === card2.dataset.cardName) {
          card1.classList.add("linked");
          card2.classList.add("linked");
          cardsTurned = 0;

        }

        if (memoryGame.isFinished()) {
          let minutes = chronometer.getMinutes()
          let twoDigitMinutes = chronometer.twoDigitsNumber(minutes)
          let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
          chronometer.stopClick()

          printResult = `You finished the game with ${memoryGame.pairsClicked} pairs of cards raised; with the time ${twoDigitMinutes[0]}${twoDigitMinutes[1]}:${seconds[0]}${seconds[1]}, what it supposes ${Math.round(chronometer.currentTime / memoryGame.pairsGuessed * 100) / 100} seconds each card couple `


          const element = document.getElementById('result')


          var pElem = document.createElement('p');
          pElem.innerText = printResult;
          element.appendChild(pElem);


        }
        let pairsClicked = document.querySelector('#pairs-clicked')
        pairsClicked.innerText = memoryGame.pairsClicked
        let pairsGuessed = document.querySelector('#pairs-guessed')
        pairsGuessed.innerText = memoryGame.pairsGuessed

      });

    });

  });

  var node = document.getElementsByTagName('div');
  var divLength = node.length;
  var randomDiv = Math.random() * divLength;

