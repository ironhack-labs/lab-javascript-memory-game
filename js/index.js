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
//memoryGame.shuffleCards();


function checkCards(card) {
  seeCards(card)
  checkTwoCards(card)
  scoreBoard()
  checkFinish()
}

function seeCards (card) {
  card.classList.toggle('turned')
}

function checkTwoCards (card) {
  const twoCard = memoryGame.pickedCards
  twoCard.push(card)
  if (twoCard.length === 2) {
    const nameOne = twoCard[0].getAttribute('data-card-name')
    const nameTwo = twoCard[1].getAttribute('data-card-name')
    if (!memoryGame.checkIfPair(nameOne, nameTwo)){
      setTimeout(() => {
        twoCard.map (card => card.classList.toggle('turned', false))
      }, 1000);
    }
    memoryGame.pickedCards = []
  }

}

function scoreBoard() {
   const click = document.getElementById('pairs-clicked')
   const clickGuessed = document.getElementById('pairs-guessed')
   click.innerText = memoryGame.pairsClicked
   clickGuessed.innerText = memoryGame.pairsGuessed
}

function checkFinish() {
  if (memoryGame.isFinished()) {
    setTimeout(() => {
      alert(`You win this game in ${memoryGame.pairsClicked} click`)
      location.reload()
    }, 1000);
  }

}



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
      checkCards(card)
    });
  });
});
