import { MemoryGame } from './memory.js'

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


window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  
  // Bind the click event of each element to a function
  
  let card1 = ""
  let card2 = ""
  document.querySelectorAll('.card').forEach((card) => { 
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(card1 == "" && card2 == "") {
        card.classList.toggle('turned')
        card1 = card.getAttribute('data-card-name')
      } else {
        card.classList.toggle('turned')
        card2 = card.getAttribute('data-card-name')
        
        setTimeout(() => {
          const check = memoryGame.checkIfPair(card1, card2);
          document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
          if(check) {
            document.querySelectorAll('.card.turned').forEach(card => card.classList.add('blocked'));
            document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;
            card1 = "";
            card2 = "";
            const finish = memoryGame.checkIfFinished()
            if (finish) {
              memoryGame.pairsClicked = 0;
              memoryGame.pairsGuessed = 0;
              document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
              document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;
              document.querySelectorAll('.card').forEach((card) => {
                card.classList.remove('turned', 'blocked')
              })
              memoryGame.shuffleCards();
            }
          } else {
            document.querySelectorAll('.card:not(.blocked)').forEach((card) => {
              card.classList.remove('turned')
              card1 = "";
              card2 = "";
            })
          }
        }, 1500)

      } 
    });
  })
});