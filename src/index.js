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
  let pairsClickedSpan = document.getElementById("pairs-clicked");
  let pairsGuessedSpan = document.getElementById("pairs-guessed");

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (
        memoryGame.pickedCards.length < 2 &&
        card.className.indexOf("card turned") != 1
      ) {
        memoryGame.pickedCards.push(card);
        card.className = "card turned";
        //console.log(memoryGame.pickedCards);

        if (memoryGame.pickedCards.length === 2) {
          let card1 = memoryGame.pickedCards[0];
          let card2 = memoryGame.pickedCards[1];
          let card1Name = card1.dataset.cardName;
          let card2Name = card2.dataset.cardName;

          //console.log(`${memoryGame.pairsClicked++}`) this also increase counter lol

          //console.log(card1 + " " + card2)
          if (!memoryGame.checkIfPair(card1Name, card2Name)) {
            setTimeout(() => {
              card1.className = "card";
              card2.className = "card";
            }, 1000);

            memoryGame.pickedCards = [];
          } else {
            //console.log(memoryGame.pairsGuessed++)
            pairsGuessedSpan.innerHTML = memoryGame.pairsGuessed;
            memoryGame.pickedCards = [];
          }
          pairsClickedSpan.innerHTML = memoryGame.pairsClicked;
        }
      }
      if (memoryGame.checkIfFinished()) {
        alert("GAME FINISHED");
        console.log("GAME FINISHED");
      }
    });
  });
});
