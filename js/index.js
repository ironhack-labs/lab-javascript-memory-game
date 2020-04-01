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
  memoryGame.shuffleCards()
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
      //console.log(`Card clicked: ${card}`);
      if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle('turned')
        memoryGame.pickedCards.push(card)
      }
      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
        let card2 = memoryGame.pickedCards[1].getAttribute("data-card-name")
        if (memoryGame.checkIfPair(card1, card2)) {
          console.log("coinciden")
          memoryGame.pickedCards = []
        } else {
          console.log("no coinciden")
          setTimeout(() => {
            memoryGame.pickedCards.map(elm => elm.classList.remove("turned"))
            memoryGame.pickedCards = []
          }, 1000)
        }
      }
      let pairsClicked = document.querySelector('#pairs-clicked')
      let pairsGuessed = document.querySelector('#pairs-guessed')
      pairsClicked.innerHTML = memoryGame.pairsClicked
      pairsGuessed.innerHTML = memoryGame.pairsGuessed
      if (memoryGame.isFinished()) {
        setTimeout(() => alert("You Won"), 1000)
      }

      /*if (memoryGame.pairsClicked === 6 && memoryGame.pairsGuessed < 6) {
        setTimeout(() => alert("You Lose"), 1000)
        memoryGame.cards.forEach(elm => {
          elm.classList.remove("turned")
          //console.log(memoryGame.cards)
        });
        memoryGame.shuffleCards()
        pairsClicked.innerHTML = 0
        pairsGuessed.innerHTML = 0

      }*/
    });
  });
});