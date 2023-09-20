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

memoryGame.shuffleCards();

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
      card.classList.add("turned");
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card.attributes[1].value);
        if (memoryGame.pickedCards.length === 2) {
          console.log(memoryGame.pickedCards);
          const card1 = memoryGame.pickedCards[0];
          const card2 = memoryGame.pickedCards[1];
          const isPair = memoryGame.checkIfPair(card1, card2);
          if (isPair) {
            document.querySelectorAll(".turned").forEach((turnedCard) => {
              if (turnedCard.attributes[1].value === card1) {
                turnedCard.classList.add("blocked");
              }
            });
            document.getElementById("pairs-clicked").textContent =
              memoryGame.pairsClicked;
            document.getElementById("pairs-guessed").textContent =
              memoryGame.pairsGuessed;
            memoryGame.pickedCards = [];
          } else {
            document.getElementById("pairs-clicked").textContent =
              memoryGame.pairsClicked;
            setTimeout(() => {
              document
                .querySelectorAll(`[data-card-name="${card1}"]`)
                .forEach((card) => {
                  card.classList.remove("turned");
                });
              document
                .querySelectorAll(`[data-card-name="${card2}"]`)
                .forEach((card) => {
                  card.classList.remove("turned");
                });
            }, 1000);
            memoryGame.pickedCards = [];
          }
        }
      } else {
        memoryGame.pickedCards = [];
        memoryGame.pickedCards.push(card.attributes[1].value);
      }
      let isFinished = memoryGame.checkIfFinished();
      if (isFinished) {
        document.querySelector("#finished").removeAttribute("style");
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
