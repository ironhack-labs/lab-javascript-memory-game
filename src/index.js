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

  document.querySelector('#memory-board').innerHTML = html;

  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!memoryGame.pickedCards.length) {
        card.classList.add('turned')
        memoryGame.pickedCards.push(card)
      } else if (memoryGame.pickedCards.length === 1) {
        card.classList.add('turned')
        memoryGame.pickedCards.push(card)
        if (!memoryGame.checkIfPair(
          memoryGame.pickedCards[0].dataset.cardName, 
          memoryGame.pickedCards[1].dataset.cardName
        )) {
          setTimeout(()=>{
            memoryGame.pickedCards.forEach(card => card.classList.remove('turned'))
            memoryGame.pickedCards.splice(0,2)
          },2000)
        } else {
          memoryGame.pickedCards.splice(0,2)
        }
      }
      if (memoryGame.checkIfFinished()) setTimeout(() => alert('Game Over! Refresh the page (F5) to play again'), 1000)
      document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
    });
  });
});
