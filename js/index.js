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
memoryGame.shuffleCards(memoryGame.cards);
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

  function revealCard(card) { 
    card.classList.add('turned');
    memoryGame.pickedCards.push(card.getAttribute("data-card-name"));
    if (memoryGame.pickedCards.length===2) evaluateCards();
  };
  function evaluateCards() {
  let result = memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1]);
  document.getElementById("pairs-clicked").textContent = memoryGame.pairsClicked;
  document.getElementById("pairs-guessed").textContent = memoryGame.pairsGuessed;
  if (result) {
    document.querySelectorAll('.card.turned').forEach(elem=>elem.classList.add('blocked'));
    if (memoryGame.isFinished()) alert('You won!!!!!');
    memoryGame.pickedCards = [];
  } else {
    setTimeout(() => {
      document.querySelectorAll('.card.turned:not(.blocked)').forEach(elem=> elem.classList.remove('turned'));
      memoryGame.pickedCards = [];
    }, 2000);
  }
}

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if (memoryGame.pickedCards.length<2) revealCard(card) 

      // console.log(`Card clicked: ${card}`);
    });
  });
});
      

