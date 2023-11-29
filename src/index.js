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

let isProcessing = false;

window.addEventListener("load", (event) => {
  let html = "";
  // memoryGame.shuffleCards(cards);
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  document.querySelector("#memory-board").innerHTML = html;
  const pairsClicked = document.querySelector("#pairs-clicked");
  const pairsGuessed = document.querySelector("#pairs-guessed");

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (isProcessing) {
        return;
      }

      card.classList.add("turned");
      memoryGame.pickedCards.push(card);

      memoryGame.pairsClicked++;
      pairsClicked.innerHTML = memoryGame.pairsClicked;

      if (memoryGame.pickedCards.length === 2) {
        isProcessing = true;

        const check = memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        );

        if (check) {
          const finish = memoryGame.checkIfFinished();
          if (finish) {
            setTimeout(() => {
              window.alert("You won!");

              memoryGame.pairsClicked = 0;
              pairsClicked.innerHTML = memoryGame.pairsClicked;
              memoryGame.pairsGuessed = 0;
              pairsGuessed.innerHTML = memoryGame.pairsGuessed;

              document.querySelectorAll(".card").forEach((card) => {
                card.classList.remove("turned");
              });
            }, 1000);
          }

          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];

          isProcessing = false;
        } else {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove("turned");
            memoryGame.pickedCards[1].classList.remove("turned");
            memoryGame.pickedCards = [];

            isProcessing = false;
          }, 1000);
        }
      }
    });
  });
});
