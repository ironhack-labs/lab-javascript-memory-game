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
      card.classList.toggle('turned', memoryGame.pickedCards.length <= 1)
      memoryGame.pickedCards.push(card.getAttribute('data-card-name'))

      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0]
        const card2 = memoryGame.pickedCards[1]

        if (memoryGame.checkIfPair(card1, card2)) {
          document.querySelectorAll('.card.turned').forEach((elm) => elm.classList.add('blocked'))

          if (memoryGame.checkIfFinished()) {
            alert('Game Over!')
          }
          memoryGame.pickedCards = []
        } else {
          setTimeout(() => {
            document
              .querySelectorAll('.card:not(.blocked)')
              .forEach((elm) => elm.classList.remove('turned'))
            memoryGame.pickedCards = []
          }, 1000)
        }
      }
      updateScore()
    });
  });
});

const updateScore = () => {
  document.querySelector('#pairs-clicked').innerText = `${memoryGame.pairsClicked}`
  document.querySelector('#pairs-guessed').innerText = `${memoryGame.pairsGuessed}`
}