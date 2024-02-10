import { MemoryGame } from "./memory.js";
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

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.shuffleCards(cards);
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
      // If game isn't over, keep checking pairs
      if (!memoryGame.checkIfFinished()) {
        memoryGame.pickedCards.push(card);
        card.classList.toggle("turned");
        // If it´s the first card to check,
        if (memoryGame.pickedCards.length == 1) {
          console.log(
            `Card 1 clicked: ${memoryGame.pickedCards[0].getAttribute(
              "data-card-name"
            )}`
          );
        } else {
          console.log(
            `Card 2 clicked: ${memoryGame.pickedCards[1].getAttribute(
              "data-card-name"
            )}`
          );
          // Check if card names in array match
          if (
            memoryGame.checkIfPair(
              memoryGame.pickedCards[0].getAttribute("data-card-name"),
              memoryGame.pickedCards[1].getAttribute("data-card-name")
            )
          ) {
            // If so, block them and empty array
            card.classList.toggle("blocked");
            memoryGame.pickedCards = [];
          } else {
            // Assign array items to variables so that it can be accessed in setTimeout scope
            let card1 = memoryGame.pickedCards[0];
            let card2 = memoryGame.pickedCards[1];

            setTimeout(() => {
              card1.classList.toggle("turned");
              card2.classList.toggle("turned");
            }, 500);
            // Empty array
            memoryGame.pickedCards = [];
          }
        }
      } else {
        // Game over message
        alert("You won!");
      }
    });
  });
});
