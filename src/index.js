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

  function rerenderScoreboard() {
    document.getElementById("pairs-guessed").innerHTML =
      memoryGame.pairsGuessed;
    document.getElementById("pairs-clicked").innerHTML =
      memoryGame.pairsClicked;
  }

  let funcInQueue = null;
  let turnCardsTimeout = null;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (turnCardsTimeout !== null) {
        clearTimeout(turnCardsTimeout);
        funcInQueue();
        funcInQueue = null;
        turnCardsTimeout = null;
      }

      const cardClicked = card.getAttributeNode("data-card-name").value;
      memoryGame.pickedCards.push(card);

      const isTurned = card.classList.contains("turned");
      const isBlocked = card.classList.contains("blocked");
      if (!isTurned) {
        // Option 1 (transition looks cleaner)
        card.classList.toggle("turned", true);
      }

      if (!isTurned && !isBlocked && memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card1Name = card1.getAttributeNode("data-card-name").value;
        const card2 = memoryGame.pickedCards[1];
        const card2Name = card2.getAttributeNode("data-card-name").value;
        const pairs = memoryGame.checkIfPair(card1Name, card2Name);

        if (pairs) {
          card1.classList.toggle("blocked", true);
          card2.classList.toggle("blocked", true);
          memoryGame.pickedCards = [];
          if (memoryGame.checkIfFinished())
            setTimeout(() => alert("You won!!!"), 600);
        } else {
          funcInQueue = () => {
            card1.classList.toggle("turned", false);
            card2.classList.toggle("turned", false);
            memoryGame.pickedCards = [];
          };
          turnCardsTimeout = setTimeout(funcInQueue, 1500);
        }

        rerenderScoreboard();
      }
    });
  });
});
