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
      // TODO: write some code here

      card.classList.toggle('turned')
      memoryGame.pickedCards.push(card)
      console.log(`Card clicked: ${card}`)

      if (memoryGame.pickedCards.length === 2) {
        const a = memoryGame.pickedCards[0]
        const b = memoryGame.pickedCards[1]


        if (memoryGame.checkIfPair(a.dataset.cardName, b.dataset.cardName)) {
          a.classList.toggle('blocked')
          b.classList.toggle('blocked')
        }
        else {
          const timeoutID = setTimeout(() => {
            a.classList.toggle('turned')
            b.classList.toggle('turned')
          }, 1500)
        }

        memoryGame.pickedCards = []

        if (memoryGame.checkIfFinished()) {
          console.log('Ganaste');
          const timeoutID = setTimeout(() => {
            const cards = document.querySelectorAll('.card')
            cards.forEach(element => {
              element.classList.toggle('turned')
            })
            memoryGame.pairsClicked = 0
            memoryGame.pairsGuessed = 0
          }, 3000)


        }
      }

      const pairsClicked = document.querySelector('#pairs-clicked')
      pairsClicked.innerHTML = memoryGame.pairsClicked
      const pairsGuessed = document.querySelector('#pairs-guessed')
      pairsGuessed.innerHTML = memoryGame.pairsGuessed

    });
  });
});
