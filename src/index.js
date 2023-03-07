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
const checkIf2cardsTurned = () => {
  memoryGame.pickedCards = document.querySelectorAll(".turned");
  console.log();
  /*if (turnedCards.length > 2) {
    console.log(memoryGame.pickedCards);
    console.log(
      memoryGame.checkIfPair(
        turnedCards[0].getAttribute("data-card-name"),
        turnedCards[1].getAttribute("data-card-name")
      )
    );
    console.log(turnedCards[0], turnedCards[1]);
    turnedCards[0].classList.toggle("turned");
    turnedCards[1].classList.toggle("turned");
  }*/
};

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
      card.classList.toggle("turned");
      if (memoryGame.pickedCards.length == 2) {
        if (
          !memoryGame.checkIfPair(
            memoryGame.pickedCards[0].getAttribute("data-card-name"),
            memoryGame.pickedCards[1].getAttribute("data-card-name")
          )
        ) {
          memoryGame.pickedCards[0].classList.toggle("turned");
          memoryGame.pickedCards[1].classList.toggle("turned");
        }
        memoryGame.pickedCards = [];
      }
      memoryGame.pickedCards.push(card);
      document.querySelector("#pairs-clicked").innerHTML =
        memoryGame.pairsClicked;
      document.querySelector("#pairs-guessed").innerHTML =
        memoryGame.pairsGuessed;
      if (memoryGame.checkIfFinished()) alert("You won!!!");
    });
  });
});
