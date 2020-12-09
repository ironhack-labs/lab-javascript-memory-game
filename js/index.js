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
memoryGame.shuffleCards()

window.addEventListener('load', () => {
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
      // Add Turned class to current card
      card.classList.add('turned');
      // Add current card to MemoryGame Array
      memoryGame.pickedCards.push(card.dataset.cardName)

      // Check if the user has chosen 2 cards
      if ( memoryGame.pickedCards.length === 2 ){
        let card1 = memoryGame.pickedCards[0];
        let card2 =  memoryGame.pickedCards[1]
        // Check if pair
        if ( !memoryGame.checkIfPair( card1, card2 ) ) {
          // 1 sec to view the card
          setTimeout(() => {
            document.querySelectorAll(`[data-card-name='${card1}']`).forEach(card1 => {
              card1.classList.remove('turned');
            })
            document.querySelectorAll(`[data-card-name='${card2}']`).forEach(card2 => {
              card2.classList.remove('turned');
            })
          }, 1000)
        }
      }

      // Show pairs clicked and pairs guessed in front
      document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;

      // Check if the game is finished
      if( memoryGame.isFinished() ){
        document.querySelectorAll('.card').forEach(c => {
          c.classList.remove('turned');
        })
        alert('You won!!!')
      }

    });
  });
});
