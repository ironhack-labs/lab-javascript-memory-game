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
let clickPause = false;
const memoryGame = new MemoryGame(cards);

function score() {
  let scoreClick = document.getElementById('pairs-clicked')
  scoreClick.innerHTML = memoryGame.pairsClicked;
  let scoreGuess = document.getElementById('pairs-guessed')
  scoreGuess.innerHTML = memoryGame.pairsGuessed;
}

function flip(card) {
  memoryGame.pickedCards.push(card)
  card.className += " turned";
  let arrLength = memoryGame.pickedCards.length
  if (arrLength <= 1) {
    check(arrLength);
  } else {
    setTimeout(() => {
      check(arrLength)
    }, 500);
  }
}

function check(arrLength) {
  console.log(arrLength)
  let guessed = false;
  let nameCard1 = memoryGame.pickedCards[0].getAttribute("data-card-name")
  if (arrLength <= 1) {
    memoryGame.checkIfPair(nameCard1, 0);
    guessed = "undefined"
  } else {
    guessed = memoryGame.checkIfPair(nameCard1, memoryGame.pickedCards[1].getAttribute("data-card-name"));
  }

  score()
  
  if (guessed === "undefined") {
    clickPause = false;
    return "undefined";
  }
  if (guessed) {
    if (memoryGame.isFinished()) {
      console.log("Winner!!!")
      document.querySelectorAll('.card').forEach(card => {
        card.className = "card";
      })
      setTimeout(() => {
        location.reload()
      }, 300);
    }
  } else {
    memoryGame.pickedCards[0].className = "card";
    memoryGame.pickedCards[1].className = "card";
  }
  memoryGame.pickedCards = [];
  clickPause = false;
}

let numClick = 0;
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
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      console.log(clickPause)
      if (!clickPause) {
        clickPause = true;
        flip(card)
      }
    });
  });
});