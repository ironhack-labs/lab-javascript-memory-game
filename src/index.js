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
      console.log(`Card clicked: ${card}`);
      this.pickedCards.push(card);
      document.getElementsByClassName("front");
      if (memoryGame.pickedCards < 2) {
        console.log("Pick another one!");
      } else if (memoryGame.pickedCards > 2) {
        console.log("Pick two card only!");
        memoryGame.pickedCards.length === 2;
      } else if (memoryGame.pickedCards === 2) {
        const card1 = cards[0];
        const card2 = cards[1];
        if (memoryGame.checkIfPair === false) {
          setTimeout(() => {
            card1.classList.remove("back");
            card2.classList.remove("back");
          }, 1000);
        } else if (memoryGame.pairsGuessed) {
          this.pairsGuessed++;
          this.pairsGuessed.innerHTML++;
          document.getElementsByClassName("front");
        } else if (memoryGame.checkIfFinished) {
          alert("You won!!!");
        }
      }
    });
  });
});
