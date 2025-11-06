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

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (memoryGame.pickedCards.length === 2) return;

      card.classList.add("turned");

      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length !== 2) return;

      const firstCard = memoryGame.pickedCards[0];
      const secondCard = memoryGame.pickedCards[1];

      const firstName = firstCard.getAttribute("data-card-name");
      const secondName = secondCard.getAttribute("data-card-name");

      const isPair = memoryGame.checkIfPair(firstName, secondName);

      document.querySelector("#pairs-clicked").textContent =
        memoryGame.pairsClicked;
      document.querySelector("#pairs-guessed").textContent =
        memoryGame.pairsGuessed;

      if (isPair) {
        memoryGame.pickedCards = [];

        if (memoryGame.checkIfFinished()) {
          alert("You won!");
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove("turned");
          secondCard.classList.remove("turned");
          memoryGame.pickedCards = [];
        }, 800);
      }
    });
  });
});
