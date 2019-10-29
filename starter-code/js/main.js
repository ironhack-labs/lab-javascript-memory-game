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

document.addEventListener("DOMContentLoaded", function (event) {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  //DOM els
  const pairsClickedEl = document.querySelector("#pairs_clicked");
  const pairsGuessedEl = document.querySelector("#pairs_guessed");

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function () {

      console.log(card);

      let card1; let card2;
      this.classList.add('turned');

      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
      }

      if (memoryGame.pickedCards.length > 1) {
        card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")
        card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");

        if (!memoryGame.checkIfPair(card1, card2)) {
          unmatchingCards(card1, card2);
          pairsClickedEl.innerHTML = memoryGame.pairsClicked;

        } else {
          matchingCards(card1, card2);
          pairsClickedEl.innerHTML = memoryGame.pairsClicked;
          pairsGuessedEl.innerHTML = memoryGame.pairsGuessed;

          if (memoryGame.isFinished()) {
            resetBoard(html);
            pairsClickedEl.innerHTML = 0;
            pairsGuessedEl.innerHTML = 0;
          }
        }
      }
    };
  });
});


function unmatchingCards(c1, c2) {
  console.log(c1 + " and " + c2 + " are not a match");

  setTimeout(() => {
    memoryGame.pickedCards.map((pickedCard) => pickedCard.classList.remove("turned"));
    memoryGame.pickedCards = [];
  }, 1000)
}

function matchingCards(c1, c2) {
  console.log(c1 + " and " + c2 + " are a match");
  memoryGame.pickedCards = [];
}

function resetBoard(content) {
  memoryGame.shuffleCards();
  setTimeout(() => {
    document.querySelector('#memory_board').innerHTML = content;
  }, 1000)
}