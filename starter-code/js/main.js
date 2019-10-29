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

  // memoryGame.shuffleCards();

  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector('#memory_board').innerHTML = html;

  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function () {
      
      card.className = "card turned";
      
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        document.querySelector("#pairs_clicked").innerHTML = memoryGame.pairsClicked + 1;
        let cardOne = memoryGame.pickedCards[0].getAttribute('data-card-name');
        let cardTwo = memoryGame.pickedCards[1].getAttribute('data-card-name');

        if (memoryGame.checkIfPair(cardOne, cardTwo)) {
          document.querySelector("#pairs_guessed").innerText = memoryGame.pairsGuessed;
          memoryGame.pickedCards.splice(0, 2);
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach ((element) => element.className = "card")
            memoryGame.pickedCards.splice(0, 2);
          }, 1000);
        }
      }

      if (memoryGame.isFinished()) {
        console.log(`YOU WIN!!`);
      } else {
        console.log('Pick another card - Last card clicked: ', card);
      }

    };

  });
});


