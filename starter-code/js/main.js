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

let isSecondClick = false;
let firstCard;
let secondCard = null;
const nameAttr = "data-card-name";

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function (event) {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function () {
      if (secondCard === null) {
        if (!card.className.includes("turned")) {
          card.className = "card turned";
        }

        if (isSecondClick) {
          isSecondClick = !isSecondClick;
          secondCard = card;
          setTimeout(() => {
            if (memoryGame.checkIfPair(firstCard.getAttribute(nameAttr), secondCard.getAttribute(nameAttr))) {
              document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
              document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed;
              if (memoryGame.isFinished()) {
                document.getElementById("memory_board").innerHTML = "YOU WIN!!!";
              }
            } else {
              document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
              firstCard.className = "card";
              secondCard.className = "card";
            }
            firstCard = null;
            secondCard = null;
          }, 500);

        } else {
          isSecondClick = !isSecondClick;
          firstCard = card;
        }
      }
    };
  });
});