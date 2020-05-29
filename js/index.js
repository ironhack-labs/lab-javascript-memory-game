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

  memoryGame.shuffleCards();

  setTimeout(() => {
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('turned');
    });
  }, 500);

  setTimeout(() => {
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('turned');
    });
  }, 2000);

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
      
      if (memoryGame.pickedCards.length < 3) {

        memoryGame.pickedCards.push(card);
        card.classList.toggle('turned');

      }
      
      if (memoryGame.pickedCards.length === 2 ) {
        
              
        const firstCard = memoryGame.pickedCards[0];
        const secondCard = memoryGame.pickedCards[1];
        const firstCardName = firstCard.getAttribute('data-card-name');
        const secondCardName = secondCard.getAttribute('data-card-name');
        
        setTimeout(() => {
          if (memoryGame.checkIfPair(firstCardName, secondCardName)) {

            memoryGame.pickedCards = [];

            firstCard.classList.add('blocked');
            secondCard.classList.add('blocked');

            const scorePairsClicked = document.getElementById('pairs-clicked');
            scorePairsClicked.innerText = memoryGame.pairsClicked;

            const scorePairsGuessed = document.getElementById('pairs-guessed');
            scorePairsGuessed.innerText = memoryGame.pairsGuessed;

            if (memoryGame.isFinished()) {
              alert('Congrats! You won!!!')
            }

          } else {

            memoryGame.pickedCards = [];

            firstCard.classList.remove('turned');
            secondCard.classList.remove('turned');

            const scorePairsClicked = document.getElementById('pairs-clicked');
            scorePairsClicked.innerText = memoryGame.pairsClicked;

            }
            
          }, 700);
          
        }

        // if (memoryGame.isFinished()) {
        //   alert('You won!!!')
        // }

      });


      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      
    });

  });

// });
  