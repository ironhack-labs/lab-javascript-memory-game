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
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length == 2) {

        const firstCard = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const secondCard = memoryGame.pickedCards[1].getAttribute('data-card-name');
        
        if (memoryGame.checkIfPair(firstCard, secondCard)) {

          memoryGame.pickedCards.forEach(c => {
            c.classList.add('blocked');
          });
          
          memoryGame.pickedCards = [];
          
          document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;

          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              document.getElementById('memory-board').innerHTML = `<h1>Congrats - You Won!</h1>`
            }, 500)
            
          };    

        } else {

          setTimeout(() => {

            memoryGame.pickedCards.forEach(c => {

              c.classList.remove('turned');
              memoryGame.pickedCards = [];

              document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
            });

          }, 500);
        }
      
      }
    });
  });
});
