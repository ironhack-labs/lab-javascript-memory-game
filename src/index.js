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
    card.addEventListener("click", () => {
      let counterPairsClicked = memoryGame.pairsClicked;
      let counterPairsGuessed = memoryGame.pairsGuessed;

      //cheching of 2 cards are selected
      if ((memoryGame.pickedCards.length = 2)) {
        memoryGame.pickedCards.push(card);
        card.classList.add("turned");
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        );
      }
      //if pairs = not the same; false
      else {
        //remove turned
        card.removeAttribute("turned");

        memoryGame.pickedCards = 0;
      }

      // checking if cards are pair!
      if (
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        ) === true
      ) {
        //if pairs = same; true
        // Add class blocked
        card.classList.add("blocked");
        //Check if Finished
        memoryGame.checkIfFinished();
      }

      //if pairs = not the same; false
      else {
        //remove turned
        card.removeAttribute("turned");
        memoryGame.pickedCards = 0;
      }

      let pairsClicked = document.querySelector("#pairs-clicked");
      pairsClicked.textContent = `${counterPairsClicked}`;

      console.log(`Card clicked: ${card}`);
    });
  });
});
