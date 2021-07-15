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

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      if (
        !card.classList.contains('turned') &&
        !card.classList.contains('blocked')
      ) {
        if (memoryGame.pickedCards.length < 2) {
          card.classList.toggle('turned');
          memoryGame.pickedCards.push(card.getAttribute('data-card-name'));
          console.log(memoryGame.pickedCards);
        }
        if (memoryGame.pickedCards.length === 2) {
          const isMatch = memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          );

          const pairsClickedElement = document.getElementById('pairs-clicked');
          memoryGame.pairsClicked++;
          pairsClickedElement.innerHTML = memoryGame.pairsClicked / 2;

          const turnedCards = document.querySelectorAll('.turned');

          if (isMatch) {
            console.log(turnedCards);
            turnedCards.forEach((element) => {
              element.classList.add('blocked');
            });
            const pairsGuessedElement =
              document.getElementById('pairs-guessed');
            memoryGame.pairsGuessed++;
            pairsGuessedElement.innerHTML = memoryGame.pairsGuessed / 2;
            memoryGame.checkIfFinished();
          } else {
            setTimeout(() => {
              turnedCards.forEach((element) => {
                if (!element.classList.contains('blocked')) {
                  element.classList.toggle('turned');
                }
              });
            }, 1000);
          }
          memoryGame.pickedCards = [];
        }
      }

      // console.log(`Card clicked: ${card}`);
      // console.log(`Card clicked: ${card.getAttribute('data-card-name')}`);
    });
  });
});
