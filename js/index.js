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
    memoryGame.shuffleCards()
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Select pairs clicked and pairs guessed
  const pairsClickedTag = document.getElementById('pairs-clicked')
  const pairsGuessedTag = document.getElementById('pairs-guessed')

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      card.setAttribute('class', 'card turned')
      memoryGame.pickedCards.push(card)

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0]
        let card2 = memoryGame.pickedCards[1]

        let card1name = card1.getAttribute('data-card-name')
        let card2name = card2.getAttribute('data-card-name')

        if (memoryGame.checkIfPair(card1name, card2name)) {
          // console.log('las cartas son iguales')

        } else {
          // console.log('las cartas son diferentes')
          const timeoutId = setTimeout(() => {
            card1.setAttribute('class', 'card')
            card2.setAttribute('class', 'card');
          }, 1000);
        }

        memoryGame.pickedCards = []
      }

      pairsClickedTag.innerHTML = memoryGame.pairsClicked
      pairsGuessedTag.innerHTML = memoryGame.pairsGuessed

      if (memoryGame.checkIfFinished()) {
        alert('YOU WIN !!!!')
      }
      //console.log(`Card clicked: ${card}`);
    });
  });
});
