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

  document.querySelector('#memory-board').innerHTML = html;
  const counterClicks = document.querySelector('#pairs-clicked')
  const counterGuessed = document.querySelector('#pairs-guessed')

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card)
      card.classList.add('turned')
      if (memoryGame.pickedCards.length === 2) {
        const cardA = memoryGame.pickedCards[0]
        const cardB = memoryGame.pickedCards[1]
        const cardAElement = memoryGame.pickedCards[0].getAttribute('data-card-name')
        const cardBElement = memoryGame.pickedCards[1].getAttribute('data-card-name')
        if (memoryGame.checkIfPair(cardAElement, cardBElement)) {
          memoryGame.pickedCards = []
          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              alert('LO LOGRASTE')
              location.reload()
            }, 800)
          }
        } else {
          setTimeout(() => {
            cardA.classList.remove('turned')
            cardB.classList.remove('turned')
          }, 500)
        }
        memoryGame.pickedCards = []
      }

      counterClicks.textContent = memoryGame.pairsClicked;
      counterGuessed.textContent = memoryGame.pairsGuessed;
    });
  });
});
