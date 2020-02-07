const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", event => {
  memoryGame.shuffleCards();
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      
      turnCard(card);
      memoryGame.pickedCards.push(card.getAttribute('data-card-name'));

      if (memoryGame.pickedCards.length == 2) {
        lock();
        checkPickedCards();
        checkGameFinished();
        memoryGame.pickedCards = [];
        document.querySelector('#pairs_clicked').innerText = memoryGame.pairsClicked;
        document.querySelector('#pairs_guessed').innerText = memoryGame.pairsGuessed;
      }
    });
  });
});

function addWon() {
  let p = document.createElement('p');
  p.innerText = 'You won!!!!!!!!!!!';
  document.querySelector('#score').appendChild(p);
}

function unturnCards() {
  memoryGame.pairsGuessed = 0;
  setTimeout(() => document.querySelectorAll(".card").forEach(card => {
    card.classList.remove('turned');
    unlock();
  }), 1000);
}

function lock() {
  document.querySelector('body').classList.add('blocked');
}

function unlock() {
  document.querySelector('body').classList.remove('blocked');
}

function turnCard(card) {
  card.classList.add('turned');
}

function checkPickedCards() {
  if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
    unlock();
  } else {
    unturnCards();
  }
}

function checkGameFinished() {
  if (memoryGame.isFinished()) {
    unturnCards();
    addWon();
  }
}
