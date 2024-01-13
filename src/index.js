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

  document.querySelector("#memory-board").innerHTML = html;

  let pairsClicked = document.getElementById("pairs-clicked");
  let pairsGuessed = document.getElementById("pairs-guessed");

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("turned", !card.className.includes("blocked"));

      memoryGame.pickedCards.length < 2 && memoryGame.pickedCards.push(card);

      const turn = (pair) => {
        setTimeout(() => {
          pair[0].classList.toggle("turned");
          pair[1].classList.toggle("turned");
        }, 1000);
      };

      if (memoryGame.pickedCards.length == 2) {
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        )
          ? card.classList.add("blocked") &&
            memoryGame.pickedCards[0].classList.add("blocked")
          : turn(memoryGame.pickedCards);
        memoryGame.pickedCards = [];
      }

      pairsClicked.innerHTML = memoryGame.pairsClicked;
      pairsGuessed.innerHTML = memoryGame.pairsGuessed;

      memoryGame.checkIfFinished() && console.log("Game finished");
    });
  });
});
