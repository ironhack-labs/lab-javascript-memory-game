const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
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
      console.log(memoryGame.pickedCards);
      if (memoryGame.pickedCards.length > 1) {
        return;
      }

      card.classList.toggle("turned");
      memoryGame.pickCard(card);

      setTimeout(() => {
        if (memoryGame.pickedCards.length === 2) {
          const firstCard = memoryGame.pickedCards[0];
          const secondCard = memoryGame.pickedCards[1];

          const isSame = memoryGame.checkIfPair(
            firstCard.dataset.cardName,
            secondCard.dataset.cardName
          );

          if (isSame) {
            memoryGame.resetPickCards();

            if (memoryGame.checkIfFinished()) {
              alert("You won!");
            }
          } else {
            firstCard.classList.toggle("turned");
            secondCard.classList.toggle("turned");
            memoryGame.resetPickCards();
          }
        }

        document.getElementById("pairs-clicked").textContent =
          memoryGame.pairsClicked;
        document.getElementById("pairs-guessed").textContent =
          memoryGame.pairsGuessed;
      }, 2000);
    });
  });
});
