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

memoryGame.shuffleCards();

let cardsClicked = [];

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

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (cardsClicked.length > 0 && cardsClicked[0] == card){
        return;
      } else if (cardsClicked.length == 2) {
        return;
      }

      card.getElementsByClassName('back')[0].style.visibility = 'hidden';
      card.getElementsByClassName('front')[0].style.backfaceVisibility = 'visible';
      console.log(`Card clicked: ${card}`);

      cardsClicked.push(card);
      if (cardsClicked.length == 2){
        setTimeout(() => {
          let isPair = memoryGame.checkIfPair(
            cardsClicked[0].getAttribute('data-card-name'),
            cardsClicked[1].getAttribute('data-card-name'));
          let pairsClicked = document.getElementById('pairs-clicked');
          let pairsGuessed = document.getElementById('pairs-guessed');

          if (!isPair){
            cardsClicked[0].getElementsByClassName('back')[0].style.visibility = 'visible';
            cardsClicked[0].getElementsByClassName('front')[0].style.backfaceVisibility = 'hidden';
            cardsClicked[1].getElementsByClassName('back')[0].style.visibility = 'visible';
            cardsClicked[1].getElementsByClassName('front')[0].style.backfaceVisibility = 'hidden';
          }

          pairsClicked.innerHTML = memoryGame.pairsClicked;
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;

          if (memoryGame.checkIfFinished()){
            alert('You won!');
          }
          cardsClicked = [];
        }, 1000);
      }
    });
  });
});
