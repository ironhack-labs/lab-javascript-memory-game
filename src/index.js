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

// shuffle cards for new game
memoryGame.shuffleCards();
//console.log (memoryGame.cards);

// generate html for cards grid when site has loaded
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

  // Add all the generated divs inside the div with id=#memory-board
  document.querySelector("#memory-board").innerHTML = html;

  // make counter for clicks
  let clickCount = 0;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    // when clicked on card
    card.addEventListener("click", () => {
      // add the turned class to turn them around and increase counter
      card.classList.add("turned", "pending");
      // pick all elements with class turned and put them in array pickedCards
      memoryGame.pickedCards = [...document.getElementsByClassName("pending")];
      // if clicked 2 times (2 cards in array)
      if (memoryGame.pickedCards.length == 2) {
        // get the name of cards
        let nameCard1 =
          memoryGame.pickedCards[0].getAttribute("data-card-name");
        let nameCard2 =
          memoryGame.pickedCards[1].getAttribute("data-card-name");

        // check if cards are not a pair (check with function)
        if (!memoryGame.checkIfPair(nameCard1, nameCard2)) {
          setTimeout(() => {
            // turn the picked cards around after 250 millis
            memoryGame.pickedCards.forEach((element) => {
              element.classList.remove("turned", "pending");
            });
          }, "750");
        } else {
          // pairs should stay! turned as class should remain
          memoryGame.pickedCards.forEach((element) => {
            element.classList.remove("pending");
          });
        }

        // update score
        document.getElementById("pairs-clicked").innerHTML =
          memoryGame.pairsClicked;
        document.getElementById("pairs-guessed").innerHTML =
          memoryGame.pairsGuessed;

        // check if game is finished
        setTimeout(() => {
          // turn the picked cards around after 250 millis
          if (memoryGame.checkIfFinished()) alert("YOU WIN");
        }, "2000");
      }
      console.log(memoryGame.checkIfFinished());
      console.log(memoryGame.pickedCards);
      // console.log (`current score is ${memoryGame.pairsGuessed}`)
      // console.log (`total pairs clicked: ${memoryGame.pairsClicked}`)
      // console.log(clickCount);
      // console.log(card.getAttribute("data-card-name"));
      // console.log(`Card clicked: ${card}`);
    });
  });
});
