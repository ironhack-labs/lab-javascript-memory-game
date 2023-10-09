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
let pickedCards = [];

window.addEventListener("load", (event) => {
  memoryGame.shuffleCards();

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
      if (memoryGame.checkIfFinished()) {
        return;
      }

      if (card.classList.contains("turned")) {
        return;
      }

      card.classList.toggle("turned");
      pickedCards.push(card);

      let resultPicked = false;

      if (pickedCards.length === 2) {
        let cardA = pickedCards[0];
        let cardB = pickedCards[1];

        resultPicked = memoryGame.checkIfPair(
          cardA.getAttribute("data-card-name"),
          cardB.getAttribute("data-card-name")
        );

        if (resultPicked) {
          cardA.classList.add("blocked");
          cardB.classList.add("blocked");
        }

        document.getElementById("pairs-clicked").innerHTML =
          memoryGame.pairsClicked;
        document.getElementById("pairs-guessed").innerHTML =
          memoryGame.pairsGuessed;

        if (!resultPicked) {
          setTimeout(function () {
            cardA.classList.toggle("turned");
            cardB.classList.toggle("turned");
          }, 500);
        }

        pickedCards = [];
      }

      if (memoryGame.checkIfFinished()) {
        document.getElementById("score").style.backgroundColor =
          "rgba(47, 208, 94, 0.8)";
        alert("Game is finished !");
      }
    });
  });
});
