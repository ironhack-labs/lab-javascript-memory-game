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
        if (memoryGame.pickedCards[0]) {
          memoryGame.pickedCards.push(event.target.parentNode);
          memoryGame.pickedCards[1].classList.add('card-selected');
        } else {
          memoryGame.pickedCards.push(event.target.parentNode);
          memoryGame.pickedCards[0].classList.add('card-selected');
        }
        if (memoryGame.pickedCards[0] && memoryGame.pickedCards[1]) {
          const arePaired = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
          document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked;
          if (!arePaired) {
            setTimeout(() => {
              movementCards(memoryGame.pickedCards[0]);
              movementCards(memoryGame.pickedCards[1]);
              memoryGame.pickedCards[0].classList.remove('card-selected');
              memoryGame.pickedCards[1].classList.remove('card-selected');
              memoryGame.pickedCards = [];
            }, 500)
          } else {
            memoryGame.pickedCards = [];
            document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed;
            if (memoryGame.checkIfFinished()) {
              setTimeout(() => {
                alert('¡¡¡CRONGRATULATIONS!!!');
              }, 500)
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
