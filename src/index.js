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
memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
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

      if (memoryGame.pickedCards.length < 2) {
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);

        let card0 = memoryGame.pickedCards[0];
        let card1 = memoryGame.pickedCards[1];

        let card0Name = card0.attributes[1].value;
        let card1Name = card1.attributes[1].value;

        if (memoryGame.checkIfPair(card0Name, card1Name)) {
          console.log('hola');

          card0.classList.add('blocked');
          card1.classList.add('blocked');

          memoryGame.pickedCards = [];

          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              alert('You win!!! =^-^=');
            }, 1500);            
          }

        } else {
          setTimeout(() => {
            card0.classList.remove('turned');
            card1.classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 1500);

        }

        const pairsGuessed = document.getElementById('pairs-guessed');
        pairsGuessed.innerText = memoryGame.pairsGuessed;

        const pairsClicked = document.getElementById('pairs-clicked');
        pairsClicked.innerText = memoryGame.pairsClicked;

      }

    });
  });
});
