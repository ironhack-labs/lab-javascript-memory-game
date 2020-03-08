const cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

const memoryGame = new MemoryGame(cards);

// runs ShuffleCards method right after defining a new memoryGame
memoryGame.shuffleCards();

// initializes an empty "helper" array that will be used below
let $pickedCards = [];

// builds list of card images basing itself on memoryGame.cards
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

      // turns card in order to show its image
      card.className = "card turned";

      // saves the name of the turned card into pickedCards array
      memoryGame.pickedCards.push(card.dataset.cardName);

      // saves card selector in a separated "helper" array that will be used in order to easily turn back the cards if they aren't a pair
      $pickedCards.push(card);

      // if two cards are picked, it checks them by calling checkIfPair method
      if (memoryGame.pickedCards[1]) {

        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {

          // Updates Score HTML
          document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked;
          document.querySelector('#pairs-guessed').innerText = memoryGame.pairsGuessed;

          // Empties out the array of picked cards
          memoryGame.pickedCards = [];

          // if checkIfPair method returns true, checks if the game has finished. If this method also returns true, it launchs a location.reload() command within a set Timeout of 12 seconds. Another setTimeout and a setInterval add extra interactivity
          if (memoryGame.isFinished()) {
            window.setTimeout(() => {
              let timer = 10;
              const $youWon = $pickedCards[0].parentNode;

              window.setInterval(() => {

                $youWon.innerHTML = `<div style="text-align: center; font-size: 38px; color: red">YOU WON! <br> <br> A new game is going to start in ${timer}...</div>`;
                timer--;
              }, 1100);
              window.setTimeout(() => {
                location.reload();
              }, 12000);
            }, 200);
          }

          // if two cards have the same image, their divs visibility is forced to hidden. This allows to leave an empty space between cards on the board
          window.setTimeout(() => {
            $pickedCards[0].style.visibility = "hidden";
            $pickedCards[1].style.visibility = "hidden";
            $pickedCards = [];
          }, 600);

          // if the checkIfPair method returns false...
        } else {

          // Updates scores
          document.querySelector('#pairs-clicked').innerText = memoryGame.pairsClicked;

          // Empties out the picked cards array
          memoryGame.pickedCards = [];

          // Turns back the selected cards by using the HTML selector $pickedCards and updating their class name. A setTimeout is used in order to give a slight delay to this operation
          window.setTimeout(() => {
            $pickedCards[0].className = "card";
            $pickedCards[1].className = "card";
            $pickedCards = [];
          }, 600);
        }
      }
    });
  });
});