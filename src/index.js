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

  const displayClickedElm = document.getElementById("pairs-clicked");
  const displayGuessedElm = document.getElementById("pairs-guessed");

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function pickCard() {
      
      if (memoryGame.pickedCards.length < 2) {
        console.log(memoryGame.pickedCards.length);
        memoryGame.pickedCards.push(card);
        card.classList.toggle("turned");
      }

      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];

        const card1Name = card1.getAttribute("data-card-name");
        const card2Name = card2.getAttribute("data-card-name");

        const result = memoryGame.checkIfPair(card1Name, card2Name);
        console.log(memoryGame.pickedCards);
        
        if (result === false) {
          
          setTimeout(() => {
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
          }, 1000);

          memoryGame.pickedCards = [];

        } else {
          const gameEnd = memoryGame.checkIfFinished();
          if (gameEnd === true) {
            //display game over
          }

          displayGuessedElm.innerText = `${memoryGame.pairsGuessed}`;
          memoryGame.pickedCards = [];
        }

        displayClickedElm.innerText = `${memoryGame.pairsClicked}`;

      }
      console.log(`Card clicked: ${card}`);
    });
  });
});

//if they're pair, remain flipped, checkifFinished, disable click
//if they're not pair, flip them back (setTimeout to flip)

//empty the pickedCardsArray
