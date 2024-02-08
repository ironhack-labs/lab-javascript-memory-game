let cards = [
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

  function machingProcess(pickedCards) {
    const firstPick = pickedCards[0].getAttribute("data-card-name");
    const secondPick = pickedCards[1].getAttribute("data-card-name");
    if (
      !memoryGame.checkIfPair(firstPick, secondPick) &&
      !memoryGame.checkIfFinished()
    ) {
      memoryGame.pickedCards[0].classList.remove("turned");
      memoryGame.pickedCards[1].classList.remove("turned");
    }

    memoryGame.pickedCards[0] = memoryGame.pickedCards[2];
    memoryGame.pickedCards.pop();
    memoryGame.pickedCards.pop();
  }

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      memoryGame.pickedCards.push(card);
      if (card.classList.contains("card")) {
        card.classList.add("turned");
      }
      if (memoryGame.pickedCards.length == 3 || memoryGame.pairsGuessed == 11) {
        machingProcess(memoryGame.pickedCards);
        document.getElementById("pairs-guessed").innerHTML =
          memoryGame.pairsGuessed;
        document.getElementById("pairs-clicked").innerHTML =
          memoryGame.pairsClicked;
      }

      if (memoryGame.checkIfFinished()) {
        alert("You won!!!");
      }
    });
  });
});
