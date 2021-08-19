let firstCard = '';
let secondCard = '';
let hasFlippedCard = false;
let locked = false;

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
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  const scoreSection = document.querySelector('#score');

  function disableCard(firstCard, secondCard) {
    firstCard.removeEventListener('click', turnCard);
    secondCard.removeEventListener('click', turnCard);
  }

  function unturn() {
    locked = true;
    setTimeout(() => {
      firstCard.classList.remove('turned');
      secondCard.classList.remove('turned');
      locked = false;
    }, 900);
  }

  function turnCard(card) {
    if (locked) {
      return;
    } else {
      card.classList.add('turned');
    }

    //Behaviour for the first card
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = card;
    } else {
      //Behaviour for the second card
      secondCard = card;
      hasFlippedCard = false;

      if (
        memoryGame.checkIfPair(
          firstCard.getAttribute('data-card-name'),
          secondCard.getAttribute('data-card-name')
        )
      ) {
        disableCard(firstCard, secondCard);
        changeScore();
        if (memoryGame.checkIfFinished()) {
          scoreSection.innerHTML = `<p>Congratulations! <br> You won by guessing ${memoryGame.pairsClicked} pairs!</p>`;
        }
      } else {
        unturn();
        changeScore();
      }
    }
  }

  function changeScore() {
    document.querySelector('#pairs-guessed').innerText =
      memoryGame.pairsGuessed;
    document.querySelector('#pairs-clicked').innerText =
      memoryGame.pairsClicked;
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (memoryGame.checkIfFinished()) {
        window.alert('Congratulations! Game Finished');
      }
      turnCard(card);
    });
  });
});
