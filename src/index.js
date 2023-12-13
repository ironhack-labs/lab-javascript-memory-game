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
  function renderScoreboard() {
    document.getElementById("pairs-guessed").innerHTML =
      memoryGame.pairsGuessed;
    document.getElementById("pairs-clicked").innerHTML =
      memoryGame.pairsClicked;
  }

  function renderCards() {
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
  }

  function gameOver() {
    // Open green div with congratulations for the player
    const youWonDiv = document.getElementById("you-won");
    youWonDiv.innerHTML = "Congratulations! You won!!!";
    youWonDiv.classList.toggle("game-over", true);
    setTimeout(() => {
      youWonDiv.innerHTML =
        "Congratulations! You won!!! Restarting game in 5...";
    }, 1500);
    setTimeout(() => {
      youWonDiv.innerHTML =
        "Congratulations! You won!!! Restarting game in 4...";
    }, 2500);
    setTimeout(() => {
      youWonDiv.innerHTML =
        "Congratulations! You won!!! Restarting game in 3...";
    }, 3500);
    setTimeout(() => {
      youWonDiv.innerHTML =
        "Congratulations! You won!!! Restarting game in 2...";
    }, 4500);
    setTimeout(() => {
      youWonDiv.innerHTML =
        "Congratulations! You won!!! Restarting game in 1...";
    }, 5500);
    // After roughly 5 seconds restart the scoreboard, and the game
    setTimeout(() => {
      memoryGame.pairsPicked = 0;
      memoryGame.pairsGuessed = 0;
      renderScoreboard();
      youWonDiv.innerHTML = "Restarting game...";
      youWonDiv.classList.toggle("game-over", false);
      setTimeout(() => {
        memoryGame.pairsPicked = 0;
        memoryGame.pairsGuessed = 0;
        document.querySelectorAll(".blocked").forEach((node) => {
          node.classList.toggle("turned", false);
          node.classList.toggle("blocked", false);
        });
        memoryGame.shuffleCards();
        memoryGame.renderCards();
      }, 1500);
    }, 6500);
  }

  memoryGame.shuffleCards();
  renderCards();

  // By default, when the user clicks 2 wrong cards they will wait 1.5 seconds before flipping down again.
  // These two variables below will be used to give a greater visual experience to the player,
  // in case he doesn't want to wait.
  //
  // funcInQueue will store a function that when executed flips back down the turned cards(since the pair is wrong)
  // turnCardsTimeout will store the timeout that will be responsible for executing the function in the queue.
  //
  // If the user tries to click in another card that is not yet flipped up before the two wrong cards
  // are turned back down, then the function in the queue will be executed prematurely and the timeout
  // will be cleaned out(to prevent it executes twice)!
  //
  // That way the two wrong cards will be flipped down at the same time that the other card is flipped up,
  // thus avoiding both cheating, and the user having to wait too much.
  let funcInQueue = null;
  let turnCardsTimeout = null;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // if user clicked, and there is a function in queue, execute it now
      if (turnCardsTimeout !== null) {
        clearTimeout(turnCardsTimeout);
        funcInQueue();
        funcInQueue = null;
        turnCardsTimeout = null;
      }

      memoryGame.pickedCards.push(card);

      const isTurned = card.classList.contains("turned");
      const isBlocked = card.classList.contains("blocked");
      if (!isTurned) {
        card.classList.toggle("turned", true);
      }

      // if the user already picked 2 cards...
      if (!isTurned && !isBlocked && memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card1Name = card1.getAttributeNode("data-card-name").value;
        const card2 = memoryGame.pickedCards[1];
        const card2Name = card2.getAttributeNode("data-card-name").value;

        const pairs = memoryGame.checkIfPair(card1Name, card2Name);

        if (pairs) {
          // if the two cards are the same...
          card1.classList.toggle("blocked", true);
          card2.classList.toggle("blocked", true);
          memoryGame.pickedCards = [];
          if (memoryGame.checkIfFinished()) setTimeout(gameOver, 600);
        } else {
          // if the two cards are different...
          funcInQueue = () => {
            card1.classList.toggle("turned", false);
            card2.classList.toggle("turned", false);
            memoryGame.pickedCards = [];
          };
          turnCardsTimeout = setTimeout(funcInQueue, 1500);
        }

        renderScoreboard();
      }
    });
  });
});
