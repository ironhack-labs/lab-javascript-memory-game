const cards = [
  { name: 'sofia01', img: 'sofia01.jpg' },
  { name: 'sofia02', img: 'sofia02.jpg' },
  { name: 'sofia03', img: 'sofia03.jpg' },
  { name: 'sofia04', img: 'sofia04.jpg' },
  { name: 'sofia05', img: 'sofia05.jpg' },
  { name: 'sofia06', img: 'sofia06.jpg' },
  { name: 'sofia07', img: 'sofia07.jpg' },
  { name: 'sofia08', img: 'sofia08.jpg' },
  { name: 'sofia09', img: 'sofia09.jpg' },
  { name: 'sofia10', img: 'sofia10.jpg' },
  { name: 'sofia11', img: 'sofia11.jpg' },
  { name: 'sofia12', img: 'sofia12.jpg' },
  { name: 'sofia01', img: 'sofia01.jpg' },
  { name: 'sofia02', img: 'sofia02.jpg' },
  { name: 'sofia03', img: 'sofia03.jpg' },
  { name: 'sofia04', img: 'sofia04.jpg' },
  { name: 'sofia05', img: 'sofia05.jpg' },
  { name: 'sofia06', img: 'sofia06.jpg' },
  { name: 'sofia07', img: 'sofia07.jpg' },
  { name: 'sofia08', img: 'sofia08.jpg' },
  { name: 'sofia09', img: 'sofia09.jpg' },
  { name: 'sofia10', img: 'sofia10.jpg' },
  { name: 'sofia11', img: 'sofia11.jpg' },
  { name: 'sofia12', img: 'sofia12.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards(cards);

let pairsClicked = document.getElementById('pairs-clicked');
let pairsGuessed = document.getElementById('pairs-guessed');

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
      // TODO: write some code here'

      card.classList.add('turned');

      // add the card to the pickedCards array
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        let isPair = memoryGame.checkIfPair(card1.dataset.cardName, card2.dataset.cardName);

        if (!isPair) {
          pairsClicked.innerHTML++
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 500);

        } else {
          pairsClicked.innerHTML++
          pairsGuessed.innerHTML++;
          card1.removeEventListener('click', this);
          card2.removeEventListener('click', this);
          memoryGame.pickedCards = [];
        }

      }

      console.log(`Card clicked: ${card}`);
    });
  });
});

// random comment
