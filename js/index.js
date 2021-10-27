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
  let firstCard = 0
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.className = 'card turned'
      console.log(`Card clicked: ${card}`);
      if (firstCard === 0) {
        firstCard = card
      } else {
        let firstCardValue = firstCard.dataset.cardName
        let secondCardValue = card.dataset.cardName

        if (memoryGame.checkIfPair(firstCardValue,secondCardValue)){
          firstCard.classList.add('blocked')
          card.classList.add('blocked')
          firstCard = 0

          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed

          if (memoryGame.checkIfFinished()){
            document.querySelector('h2').innerHTML = 'YOU WIN!'

          }

        } else {

          setTimeout(() => {
            firstCard.classList.remove('turned')
            card.classList.remove('turned')
            firstCard = 0
          }, 1000)

          document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked

        }
      }
    });
  });
});
