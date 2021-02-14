import { MemoryGame } from "./memory.js";
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

memoryGame.shuffleCards(cards)

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
      card.classList.add('turned')
      memoryGame.pickedCards.push(card)


      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0].dataset.cardName
        const card2 = memoryGame.pickedCards[1].dataset.cardName
        let isPair = memoryGame.checkIfPair(card1, card2)

        const clickedScore = document.getElementById('pairs-clicked');
        clickedScore.innerText = memoryGame.pairsClicked;

        if (isPair) {
          const guessedScore = document.getElementById('pairs-guessed')
          //increment pair clicked 
          guessedScore.innerText = memoryGame.pairsGuessed;
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          memoryGame.pickedCards = []
        } else {
          setTimeout(function() {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards = []
          }, 1000)
        }
      }

      if(memoryGame.isFinished()) {
        setTimeout(function() {
          alert("YOU WIN!!!")}, 1000)


      }

      console.log(`Card clicked: ${card}`);
    });
  });

});

// 