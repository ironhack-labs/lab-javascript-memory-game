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
  memoryGame.shuffleCards();
  // memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  const clicked = document.querySelector("#pairs-clicked");
  const guessed = document.querySelector("#pairs-guessed");
  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (e) => {
      clicked.innerHTML++;

      if (
        !card.classList.contains("turned") &&
        memoryGame.pickedCards.length < 2
      ) {
        card.classList.add("turned");
        memoryGame.pickedCards.push(card);

        if (memoryGame.pickedCards.length === 2) {
          const [card1, card2] = memoryGame.pickedCards;
          const cardName1 = card1.getAttribute("data-card-name");
          const cardName2 = card2.getAttribute("data-card-name");

          if (memoryGame.checkIfPair(cardName1, cardName2)) {
            memoryGame.pickedCards = [];
            guessed.innerHTML++;

            if (memoryGame.checkIfFinished()) {
              // Game finished logic
              console.log("YOU WON !!!");
              const h1 = document.querySelector(".header");
              h1.innerHTML = "YOU WON !!!";
            }
          } else {
            setTimeout(() => {
              card1.classList.remove("turned");
              card2.classList.remove("turned");
              memoryGame.pickedCards = [];
            }, 1000);
          }
        }
      }
    });
  });
});
