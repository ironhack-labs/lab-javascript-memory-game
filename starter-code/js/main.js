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
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);
document.addEventListener('DOMContentLoaded', function(event) {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;
  let allCards = document.querySelectorAll('.card');
  let clickedPairs = document.getElementById('pairs_clicked');
  let pairsGuessed = document.getElementById('pairs_guessed');
  let countClicks = 0;

  allCards.forEach(card => {
    card.onclick = function() {
      if (memoryGame.pickedCards.length < 2) {
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);
        console.log(
          'Output for: callOnClickFunction -> memoryGame.pickedCards',
          memoryGame.pickedCards
        );
        countClicks += 1;
        let clicks = countClicks;
        if (clicks % 2 === 0) {
          let name1 = memoryGame.pickedCards[0].getAttributeNode(
            'data-card-name'
          ).value;
          let name2 = memoryGame.pickedCards[1].getAttributeNode(
            'data-card-name'
          ).value;
          if (memoryGame.checkIfPair(name1, name2)) {
            memoryGame.pickedCards = [];
          } else {
            memoryGame.pickedCards.forEach(card => {
              if (card.classList.contains('turned')) {
                setTimeout(() => {
                  card.classList.remove('turned');
                }, 2000);
                memoryGame.pickedCards = [];
              }
            });
          }
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
          clickedPairs.innerHTML = memoryGame.pairsClicked;
        }
        if (memoryGame.isFinished()) {
          congrats();
        }
      }
    };
  });
  function congrats() {
    let msg = document.querySelector('body h1');
    msg.innerHTML = `Yeahhhh, you are Superhero winner!!! You won with ${memoryGame.pairsClicked} pairs of clicks.`;

    setTimeout(() => {
      memoryGame.isFinished()
        ? confirm('Would you like to restart the game?')
          ? location.reload()
          : ''
        : '';
    }, 5000);
  }
});
// // ======================== // //
