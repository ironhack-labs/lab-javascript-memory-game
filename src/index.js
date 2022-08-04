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
    card.addEventListener("click", (e) => {
      memoryGame.pickedCards.push(card);
      memoryGame.pairsClicked++;
      document.querySelector("#pairs-clicked").textContent =
        memoryGame.pairsClicked;
      card.classList.add("turned");


      if (memoryGame.pickedCards.length === 2) {
        // Compare them
        const compareResult = memoryGame.checkIfPair(
          memoryGame.pickedCards[0].dataset.cardName,
          memoryGame.pickedCards[1].dataset.cardName
        );

        if (compareResult) {
          memoryGame.pickedCards.forEach((card) =>
            card.classList.add("turned")
          );
          document.querySelector("#pairs-guessed").textContent =
          memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach((card) =>
              card.classList.remove("turned")
            );
            memoryGame.pickedCards = [];
          }, 1500);
        }
        
      }
      
      if (memoryGame.checkIfFinished()) {
        memoryGame.pickedCards = [];
        memoryGame.pairsClicked = 0;
        memoryGame.pairsGuessed = 0;
        memoryGame.shuffleCards(cards);
        document.querySelector("#pairs-guessed").textContent =
          memoryGame.pairsGuessed;
        document.querySelector("#pairs-clicked").textContent =
          memoryGame.pairsClicked;
        window.alert('Game Over')
      }
    });
  });
});
