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

memoryGame.shuffleCards()

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

  const pairsClicked = document.getElementById("pairs-clicked");
  const pairsGuessed = document.getElementById("pairs-guessed");

  let toggler = (card) => {
    card.firstChild.classList.toggle("back");
      card.firstChild.classList.toggle("front");
      let secondChild = card.childNodes[1]
      secondChild.classList.toggle("back");
      secondChild.classList.toggle("front");
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      if(memoryGame.pickedCards.length == 0) {
        toggler(card);
        memoryGame.pickedCards.push(card);
      } else if (memoryGame.pickedCards.length == 1) {
        toggler(card);
        memoryGame.pickedCards.push(card);
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          setTimeout(() => {
            toggler(memoryGame.pickedCards[0]);
            toggler(card);
            memoryGame.pickedCards.pop();
            memoryGame.pickedCards.pop();
            pairsClicked.innerHTML = memoryGame.pairsClicked;
          }, 500);
        } else {
          memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
          memoryGame.pickedCards.pop();
          memoryGame.pickedCards.pop();
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
        }
      } else {
      }
    });
  });


});
