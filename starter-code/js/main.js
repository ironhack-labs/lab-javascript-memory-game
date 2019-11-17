const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

//placeholder values in multiarray
let pickedCards = 
[
  [],  //card1, card2
  [] //correct guesses
]

let noClickSpam = false; //prevents spamming the fun time buttons
let numGuesses = 0;

const memoryGame = new MemoryGame(cards, pickedCards, pairsClicked, pairsGuessed);

memoryGame.shuffleCards()

document.addEventListener("DOMContentLoaded", function(event) { 
  
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector('#memory_board').innerHTML = html;

  document.querySelectorAll('.card').forEach( (card, i) => {
    card.onclick = function() {
      if (!noClickSpam) {
        card.classList.add("turned");
        pickedCards[0].push(cards[i].name)
        numGuesses += 1;
            if (numGuesses == 2){
            memoryGame.checkIfPair(pickedCards[0][0], pickedCards[0][1])
            pickedCards[0] = [];
            numGuesses = 0;
            }
        (memoryGame.isFinished() == true) ? ((confirm("Mazal tov! You won with " + pairsClicked + " incorrect guesses! \n \n Restart the game?")) ? location.reload(): "") : "";   
      };
    };
  });
  
});
