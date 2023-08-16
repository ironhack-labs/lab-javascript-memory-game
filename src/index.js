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
  
  let pickedCards = [];

  
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      
      if (card.classList.contains('turned') || card.classList.contains('blocked')) {
        return;
      }

      
      card.classList.toggle('turned');

      
      pickedCards.push(card);

      
      if (pickedCards.length === 2) {
        const card1 = pickedCards[0].getAttribute('data-card-name');
        const card2 = pickedCards[1].getAttribute('data-card-name');
        
      
        if (game.checkIfPair(card1, card2)) {
          pickedCards.forEach((pickedCard) => {
            pickedCard.classList.add('blocked');
          });
        } else {
         
          setTimeout(() => {
            pickedCards.forEach((pickedCard) => {
              pickedCard.classList.remove('turned');
            });
          }, 1000); 
        }

       
        pickedCards = [];

       
        if (game.checkIfFinished()) {
          alert('Congratulations! You won!');
          
        }
      }
    });
  });


});



/* const cards = [
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

// LOAD Event 
window.addEventListener('load', (event) => {
  // array to store the currently picked cards
  let html = '';
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
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      
      // does nothing if card is already flipped or blocked
      if (card.classList.contains("turned") || card.classList.contains("blocked")) {
        return;

        // flipping card by toggling classes
        card.classList.toggle("turned");

        // add clicked card to array
        pickedCards.push(card);

        // check if 2 cards are picked
        if (pickedCards.length === 2) {
          const card1 = pickedCards[0].getAttribute('data-card-name');
          const card2 = pickedCards[1].getAttribute('data-card-name');
        }

        // calling the checkIfPair method and update classes if needed
        if (game.checkIfPair(card1, card2)) {
          pickedCards.forEach((pickedCard) => {
            pickedCard.classList.add('blocked');
          });
        } else {
          // if not a pair, flip back after a delay
          setTimeout(() => {
            pickedCards.forEach((pickedCard) => {
              pickedCard.classList.remove('turned');
            });
          }, 1000); // Wait for 1 second
      }

       // clearing the pickedCards array
       pickedCards = [];

       // checking if the game is finished
       if (game.checkIfFinished()) {
         alert('Congratulations! You won!');
        
       }

      console.log(`Card clicked: ${card}`);
    });
  });
}); */