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

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    console.log(card);
    card.addEventListener("click", (elem) => {
      memoryGame.pickedCards.push(elem.currentTarget);
      elem.currentTarget.setAttribute("class", "card turned");
      if (memoryGame.pickedCards.length >= 2) {
        const cardAElement = memoryGame.pickedCards[0];
        const cardAName =
          memoryGame.pickedCards[0].getAttribute("data-card-name");
        const cardBElement = memoryGame.pickedCards[1];
        const cardBName =
          memoryGame.pickedCards[1].getAttribute("data-card-name");
        if (memoryGame.checkIfPair(cardAName, cardBName)) {
        } else {
          setTimeout(() => {
            cardAElement.setAttribute("class", "card");
            cardBElement.setAttribute("class", "card");
          }, 500);
        }
        const counterClicks = document.querySelector("#pairs-clicked");
        const counterGuessed = document.querySelector("#pairs-guessed");
        counterClicks.textContent = memoryGame.pairsClicked;
        counterGuessed.textContent = memoryGame.pairsGuessed;
        memoryGame.pickedCards.length = 0;
        console.log(memoryGame.checkIfFinishe);

        if (memoryGame.checkIfFinished()) {
          document
            .querySelectorAll(".card")
            .forEach((card) => card.setAttribute("class", "card"));
          setTimeout(() => {
            memoryGame.pairsClicked = 0;
            memoryGame.pairsGuessed = 0;
            memoryGame.shuffleCards();
            dispatchEvent(new Event("load"));
          }, 1000);
        }
      }
    });
  });
});
