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
      // TODO: write some code here
      card.classList.toggle("turned");
      memoryGame.pickedCards.push(card);
      console.log(card);
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards.pop();
        const card2 = memoryGame.pickedCards.pop();

        if (
          memoryGame.checkIfPair(
            card1.getAttribute("data-card-name"),
            card2.getAttribute("data-card-name")
          )
        ) {
          card1.classList.toggle("blocked");
          card2.classList.toggle("blocked");
          // Check if the game is finished
          if (memoryGame.checkIfFinished())
            setTimeout(() => {
              alert("YAY. You won! OwO");
            }, 600);
        } else {
          setTimeout(() => {
            card1.classList.remove("turned");
            card2.classList.remove("turned");
          }, 600);
        }
        document.querySelector("#pairs-clicked").innerHTML =
          memoryGame.pairsClicked;
        document.querySelector("#pairs-guessed").innerHTML =
          memoryGame.pairsGuessed;
      }
      console.log(`Card clicked: ${card}`);
    });
  });
});
