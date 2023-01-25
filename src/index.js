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


      card.classList.add("turned")
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        const cardX = memoryGame.pickedCards[0]
        const cardY = memoryGame.pickedCards[1]
        const cardXElement = memoryGame.pickedCards[0].getAttribute('data-card-name')
        const cardYElement = memoryGame.pickedCards[1].getAttribute('data-card-name')
        if (memoryGame.checkIfPair(cardXElement, cardYElement)) {
          memoryGame.pickedCards = []

        } else {
          setTimeout(() => {
            cardX.classList.remove('turned')
            cardY.classList.remove('turned')
          }, 2000)
          memoryGame.pickedCards = []

        }
      }

      const clicked = document.querySelector('#pairs-clicked')
      const guessed = document.querySelector('#pairs-guessed')

      clicked.innerHTML = memoryGame.pairsClicked
      guessed.innerHTML = memoryGame.pairsGuessed

      if (memoryGame.checkIfFinished()) {
        setTimeout(() => {
          location.reload()
        }, 500)
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
