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
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back " name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {          // On click...
      // TODO: write some code here
      card.classList.add("turned");                 // ...turn card
      memoryGame.pickedCards.push(card);            // ... add card to pickedCards()
  
      if (memoryGame.pickedCards.length===2) {    // if 2 turned cards => checkIfPair sur .pickedCards()

        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {

          memoryGame.pickedCards.forEach(pickedCard => {  // if pair => class+=blocked
            pickedCard.classList.add('blocked');
          });
          if (memoryGame.isFinished()) {          // Game over ?
            setTimeout(()=>{
              alert("Congrats, you have the memory of an elephant ! Let's play again")
            },1000)
            memoryGame.shuffleCards();            // Shuffle cards
            memoryGame.pickedCards.forEach(pickedCard => {  // unblock & turn all cards face down
              pickedCard.classList.remove('blocked');
              pickedCard.classList.remove('blocked');
            });            
            memoryGame.pairsClicked = 0;          // Reset counters
            memoryGame.pairsGuessed = 0;
          }
        } else {
          setTimeout(() => {                        
            memoryGame.pickedCards.forEach(pickedCard => { 
              pickedCard.classList.remove('turned');         // Turn back cards after 1s
            });
          }, 1000);
        }
        
        memoryGame.pickedCards = [];                  // Reset .pickedCards()
        document.querySelector('#pairs-clicked').textContent = `${memoryGame.pairsClicked}`;  // Always counters++
        document.querySelector('#pairs-guessed').textContent = `${memoryGame.pairsGuessed}`;

      }
    })
  })
})