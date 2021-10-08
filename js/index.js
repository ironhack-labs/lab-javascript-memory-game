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
  let card1 = '';
  let card1Element = '';
  let card2 = '';
  let html = '';
  memoryGame.shuffleCards();
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
    card.addEventListener('click', (event) => {
      const currentCard = event.currentTarget;
      // if we already clicked on one card
      if (card1 && !card2) {
        currentCard.classList.add('turned');
        card2 = currentCard.getAttribute('data-card-name');
        console.log(card1, card2);
        if (!memoryGame.checkIfPair(card1, card2)) {
          setTimeout(() => {
            currentCard.classList.remove('turned');
            card1Element.classList.remove('turned');
            card1 = card2 = '';
            document.getElementById('pairs-clicked').textContent =
              memoryGame.pairsClicked;
          }, 1000);
        } else {
          card1 = card2 = '';
          document.getElementById('pairs-guessed').textContent =
            memoryGame.pairsGuessed;
        }
        if (memoryGame.checkIfFinished()) {
          setTimeout(() => {
            alert('You won!');
          }, 500);
        }
      } else if (!card1 || !card2) {
        currentCard.classList.add('turned');
        card1 = currentCard.getAttribute('data-card-name');
        card1Element = currentCard;
      } else if (card1 && card2) {
        // card1 = card2 = '';
        return;
      }
      // console.log(currentCard.getAttribute('data-card-name'));
      console.log(`Card clicked: ${card}`);
    });
  });
});
