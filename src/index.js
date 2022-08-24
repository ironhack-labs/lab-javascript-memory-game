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
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

let clickedPairsDisplay = document.querySelector("#pairs-clicked");
let guessedPairsDisplay = document.querySelector("#pairs-guessed");

let firstCard = null;
let secondCard = null;
let clickedPairs = 0;
let guessedPairs = 0;

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (memoryGame.pickedCards.length < 1) {
        memoryGame.pickedCards.push(card);
        firstCard = card;
        card.classList.add("turned");
      } else if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
        secondCard = card;
        card.classList.add("turned");

        test();
      }
    });
  });
});

// memoryGame.pickedCards[0].getAttribute('data-card-name')

let test = () => {
  let cardOneName = firstCard.getAttribute("data-card-name");
  let cardTwoName = secondCard.getAttribute("data-card-name");

  if (!memoryGame.checkIfFinished()) {
    clickedPairs += 1;
    clickedPairsDisplay.innerHTML = clickedPairs;

    if (memoryGame.checkIfPair(cardOneName, cardTwoName)) {
      memoryGame.pickedCards = [];
      guessedPairs += 1;
      guessedPairsDisplay.innerHTML = guessedPairs;
    }
    if (!memoryGame.checkIfPair(cardOneName, cardTwoName)) {
      setTimeout(() => {
        memoryGame.pickedCards = [];
        firstCard.classList.remove("turned");
        secondCard.classList.remove("turned");
      }, 500);
    }
  } else {
    alert("You won the Game!!!");
  }
};
