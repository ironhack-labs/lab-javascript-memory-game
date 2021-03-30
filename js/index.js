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
      gameExec(card)

      if (memoryGame.isFinished()) {
        alert('Has ganado joven heroe')
      }

    });
  });
});


function gameExec(card) {
  card.classList.toggle('turned')

  memoryGame.pickedCards.push(card)
  if (memoryGame.pickedCards.length == 2) {

    let name1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
    let name2 = memoryGame.pickedCards[1].getAttribute("data-card-name");

    if (!memoryGame.checkIfPair(name1, name2)) {
      setTimeout(() => {
        memoryGame.pickedCards[0].classList.toggle('turned');
        memoryGame.pickedCards[1].classList.toggle('turned');
        document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked
        memoryGame.pickedCards = [];
      }, 1000)
    } else {
      memoryGame.pickedCards = [];
      document.getElementById('pairs-guessed').innerText = memoryGame.pairsGuessed
      document.getElementById('pairs-clicked').innerText = memoryGame.pairsClicked

    }




  }
}