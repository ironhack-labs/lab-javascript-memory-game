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

let firstFlipped

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      // TODO: write some code here

      // We flip de card
      card.classList.toggle('turned')

      // We store the name of the flipped card
      const cardName = card.getAttribute('data-card-name')

      // We add the card to the comparing array
      memoryGame.pickedCards.push(cardName)

      // If we already picked two cards
      if (memoryGame.pickedCards.length === 2) {

        // If they are different
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {

          // We turn the first card
          firstFlipped.classList.toggle('turned')

          // We turn the second card
          setTimeout(() => card.classList.toggle('turned'), 700)

        } else {  // If they are the same

          // We update the guessed text
          document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed

        }

        // We update the Clicked text
        document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked

        if (memoryGame.isFinished()) {

          setTimeout(() => window.alert('You are a machine!!!'), 600)

        }

      }

      // If we just picked one card we store it
      if (memoryGame.pickedCards.length === 1) {

        firstFlipped = card

      }

    });
  });
});
