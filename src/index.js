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

// memoryGame.shuffleCards();

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

      card.classList.toggle("turned");

      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        let name1 = card1.dataset.cardName;
        let name2 = card2.dataset.cardName;

        let pair = memoryGame.checkIfPair(name1, name2);

        let pairsClicked = document.getElementById("pairs-clicked");
        pairsClicked.textContent = memoryGame.pairsClicked;

        if (pair) {
          let pairsGuessed = document.getElementById("pairs-guessed");
          pairsGuessed.textContent = memoryGame.pairsGuessed;

          card1.className += " blocked";
          card2.className += " blocked";

          // card1.classList.add("blocked");
          // card2.classList.add("blocked");

          if (memoryGame.checkIfFinished()) {
            // let cards = document.querySelectorAll(".card turned blocked");
            // console.log(cards);

            setTimeout(() => {
              location.reload();
            }, 3000);
            console.log("You Win!");
          }
        } else {
          setTimeout(() => {
            card1.setAttribute("class", "card");
            card2.setAttribute("class", "card");

            // card1.classList.toggle("turned");
            // card2.classList.toggle("turned");
          }, 1000);
        }
        memoryGame.pickedCards = [];
      }
    });
  });
});
