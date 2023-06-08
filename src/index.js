const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain-america", img: "captain-america.jpg" },
  { name: "fantastic-four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green-arrow", img: "green-arrow.jpg" },
  { name: "green-lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the-avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain-america", img: "captain-america.jpg" },
  { name: "fantastic-four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green-arrow", img: "green-arrow.jpg" },
  { name: "green-lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the-avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

/*
const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
];
*/
let memoryGame = new MemoryGame(cards);

// added shuffle card function
let currentDeck = memoryGame.shuffleCards(cards);

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

  let currentSelection = [];
  let guesses = document.getElementById("pairs-guessed");
  let pairsFound = document.getElementById("pairs-clicked");

  Array.from(document.querySelectorAll(".card")).forEach((card, index) => {
    card.addEventListener("click", (event) => {
      let chosenCard = event.currentTarget;

      console.log("CHOSEN CARD", chosenCard);
      chosenCard.classList.toggle("turned");

      currentSelection.push(currentDeck[index]);

      console.log(currentSelection);

      if (currentSelection.length === 2) {
        if (memoryGame.checkIfPair(currentSelection[0], currentSelection[1])) {
          console.log("PAIR FOUND");
          let pair = document.querySelectorAll(
            `[data-card-name=${currentSelection[0].name}]`
          );

          Array.from(pair).map((card) => {
            card.classList.add("match");
          });
        } else {
          let turnedCards = Array.from(
            document.getElementsByClassName("turned")
          );

          turnedCards.map((card) => {
            setTimeout(() => {
              card.classList.toggle("turned");
            }, 500);
          });

          console.log("turned: ", turnedCards);
          console.log("NOT A PAIR");
        }

        pairsFound.innerHTML = memoryGame.pairsGuessed;
        guesses.innerHTML = memoryGame.pairsClicked;
        currentSelection = [];

        if (memoryGame.checkIfFinished()) {
          alert("WINNER, WINNER, CHICKEN DINNER!");
          alert("WOULD YOU LIKE TO PLAY AGAIN?!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    });
  });
});
