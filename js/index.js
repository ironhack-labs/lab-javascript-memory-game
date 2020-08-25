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

  memoryGame.shuffleCards(cards).forEach(pic => {

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

      // Add turned class
      card.classList.add('turned')

      // Array for card's name
      let pickedCardsName = memoryGame.pickedCards

      // Add card's name
      pickedCardsName.push(card)      
      
      if (pickedCardsName.length === 2) {

        const firstCard = pickedCardsName[0].getAttribute('data-card-name')
        const secondCard = pickedCardsName[1].getAttribute('data-card-name')

        if (memoryGame.checkIfPair(firstCard, secondCard)) {

          // Add pairs clicked on HTML
          document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked
          
          // Add pairs guessed on HTML
          document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed

          // Empty the array
          memoryGame.pickedCards = []
          

        } else {

          // Remove 'turned' class after a specific time
          setTimeout(() => {

            memoryGame.pickedCards.forEach(element => element.classList.remove('turned'))
            
            // Empty the array
            memoryGame.pickedCards = []

          }, 700)

        }

        // Add pairs clicked on HTML
        document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked

      } 

      if (memoryGame.isFinished()) {

        alert('Tu ganaste! - Al creador de este alert le costó mucho llegar hasta aquí... El juego comenzará de nuevo')
        location.reload()
        
      }

    });

  });

});
