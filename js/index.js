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

window.addEventListener('DOMContentLoaded', () => {
  let html = '';
  let card1;
  let card2;
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
      if (event.target.parentNode.className === 'card') {
        if (card1) {
          card2 = event.target.parentNode;
          card2.classList.add('card-selected');
        } else {
          card1 = event.target.parentNode;
          card1.classList.add('card-selected');
        }
        if (card1 && card2) {
          const arePaired = memoryGame.checkIfPair(card1, card2);
          document.getElementById('pairs-clicked').innerText = memoryGame.pairClicked;
          if (!arePaired) {
            setTimeout(() => {
              movementCards(card1);
              movementCards(card2);
              card1.classList.remove('card-selected');
              card2.classList.remove('card-selected');
              card1 = undefined;
              card2 = undefined; 
            }, 500)
          } else {
            card1 = undefined;
            card2 = undefined;
            document.getElementById('pairs-guessed').innerText = memoryGame.pairGuessed;
            if (memoryGame.checkIfFinished()) {
              alert('CRONGRATULATIONS!!!');
            }
          }
        }
        movementCards(card);
      }
    });
  });
});


function movementCards(card) {
  for (let individualCard of Array.from(card.querySelectorAll('div'))){
    if (individualCard.className === 'front') {
      individualCard.classList.add('back');
      individualCard.classList.remove('front');
    } else {
      individualCard.classList.add('front');
      individualCard.classList.remove('back');
    }
  }
}
