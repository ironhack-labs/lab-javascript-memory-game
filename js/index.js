// MEMORY GAME DOM

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
const chronometer = new Chronometer();
alert("LET'S BEGIN!!")


window.addEventListener('load', event => {
  chronometer.startClick(printTime)
  let html = '';
  memoryGame.shuffleCards()
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector('#memory-board').innerHTML = html;
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      
      let card1;
      let card2;
    
        card.classList.toggle("turned");
       
      memoryGame.pickedCards.push(card);
      
      if(memoryGame.pickedCards.length === 2) {
        card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");

        if(memoryGame.checkIfPair(card1, card2) && memoryGame.pickedCards[0] !== memoryGame.pickedCards[1]) {
          memoryGame.pickedCards = [];
          let pairsGuessed = document.querySelector("#pairs-guessed");
          pairsGuessed.innerText = memoryGame.pairsGuessed;
          
        } else {
            memoryGame.pickedCards.forEach(div => {
              setTimeout(() => {
                div.classList.toggle("turned");
              },1000);
            }); 
          memoryGame.pickedCards = [];
        }
      }
      
      let pairsClicked = document.querySelector("#pairs-clicked");
      pairsClicked.innerText = memoryGame.pairsClicked;
      
      console.log(`Card clicked: ${card}`); 
      memoryGame.isFinished();
    });
    
  });
  
});


// CHRONOMETER DOM


let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.twoDigitsNumber(chronometer.getMilliSeconds());
  milDec.innerText = milliSeconds[0];
  milUni.innerText = milliSeconds[1];
}

  
 


