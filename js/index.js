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

window.addEventListener('load', event => {
  memoryGame.shuffleCards();
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
      // Seleccionamos 2 cards y las añadimos al array de pickedCards
      card.classList.add("turned");
      memoryGame.pickedCards.push(card);

      // Chequeamos si el length de los picketCards = 2
      if (memoryGame.pickedCards.length == 2) {

        // Definimos variables de control
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")

        // Evaluamos cards con función checkIfPair. Si las 2 cards son iguales, sumamos 1 al score de pairsClicked y pairsGuessed, y vaciamos array de pickedCards. Si no son iguales, ejecutamos función a los 500ms para hacer flip de las cards con el method .toggle() y vaciamos el array de pickedCards
        if (memoryGame.checkIfPair(card1, card2)) {
          document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked;
          document.querySelector("#pairs-guessed").innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];
        } else {
          document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked;

          setTimeout(flipCards, 500);

          function flipCards() {
            memoryGame.pickedCards.forEach(card => card.classList.toggle('turned'));
            memoryGame.pickedCards = [];
          }
        }

        memoryGame.isFinished() ? alert(`You're the beast!`) : undefined;

      };
    });
  });
})