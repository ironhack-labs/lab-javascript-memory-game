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
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        const card1Name = memoryGame.pickedCards[0].getAttribute('data-card-name');
        const card2Name = memoryGame.pickedCards[1].getAttribute('data-card-name');

        memoryGame.pairsClicked++;
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;

        if (memoryGame.checkIfPair(card1Name, card2Name)) {
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');

          memoryGame.pairsGuessed++ /2;
          document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;

          if (memoryGame.checkIfFinished()) {
            const victoryMessage = document.createElement('div');
            victoryMessage.id = 'victory-message';
            victoryMessage.innerHTML = `<h1>🎉 You won!!! 🎉</h1>`;
            document.body.appendChild(victoryMessage);
          }

          memoryGame.pickedCards = [];
        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');

            memoryGame.pickedCards = [];
          }, 1000);
        }
      }
    });
  });
});
