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

  let allCards = document.querySelectorAll(".card");

  // Bind the click event of each element to a function
  allCards.forEach(card => {
    card.onclick = function () {

      if (memoryGame.pickedCards.length < 2) {
        card.classList.add("turned");
        memoryGame.pickedCards.push(card);
      }
      
      if (memoryGame.pickedCards.length === 2) {
        let card1, card2;
        card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");

        let checked = memoryGame.checkIfPair(card1, card2);
        document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;


        if (checked) {
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];

          let finished = memoryGame.checkIfFinished();

          if (finished) {
            memoryGame.pickedCards = [];

            setTimeout(() => {
              for (let card of allCards) {
                card.classList.remove("turned");
              }
            }, 2000);
          }
        } else {
          setTimeout(() => {
            for (let card of memoryGame.pickedCards) {
              card.classList.remove("turned");
            }
            memoryGame.pickedCards = [];
          }, 1000);
        }
      }
      
    
    };
  });

});

