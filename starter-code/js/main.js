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
// for (let i = 0; i < cards.length; i++) {
//   cards[i].name;
// }
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
  let clickedPairs = document.getElementById('pairs_clicked');
  let pairsGuessed = document.getElementById('pairs_guessed');
  let allCards = document.querySelectorAll('.card');
  let countClicks = 0;
  let pairCount = 0;

  function updateStatus() {
    let pickedCards = [];
    memoryGame.pickedCard = pickedCards;
    allCards.forEach((card, i) => {
      let name = card.getAttributeNode('data-card-name').value;
      card.classList;
      if (card.classList.contains('turned')) {
        pickedCards.push(name);
        // console.log(name);
      }
    });
    for (let i = pickedCards.length - 1; i > pickedCards.length - 2; i--) {
      let name1 = pickedCards[pickedCards.length - 1];
      let name2 = pickedCards[pickedCards.length - 2];
      memoryGame.checkIfPair(name1, name2);
    }
    // console.log(memoryGame.pairsClicked);
    clickedPairs.innerHTML = memoryGame.pairsClicked;
  }

  allCards.forEach((card, i) => {
    card.onclick = callOnClickFunction;

    function callOnClickFunction(e) {
      let cardName = e.target.parentElement.getAttribute('data-card-name');

      let currentCardClassList = e.target.parentElement.classList;
      let classBack = e.target.classList.contains('back');
      if (classBack) {
        currentCardClassList.add('turned');
        countClicks += 1;
        let clicks = countClicks;
        if (clicks % 2 === 0) updateStatus();
      }
      // TODO: write some code here
    }
  });
});

// console.log('connected');
// // ======================== // //
