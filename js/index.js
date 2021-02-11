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
const clicked = document.getElementById("pairs-clicked");
const guessed = document.getElementById("pairs-guessed");

// Connect scores to the Score Board

window.addEventListener("load", (event) => {
  //shuffle the deck with the reload!!!

  memoryGame.shuffleCards();

  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      console.log(`Card clicked: ${card}`);
      let attrib = card.getAttribute("data-card-name");
      card.classList.toggle("turned");

      if (memoryGame.pickedCards.length === 0) {
        // when one card is picked, add to the picked array, store and add identifier.

        memoryGame.pickedCards.push(attrib);
        card.classList.toggle("picked");
      } else if (memoryGame.pickedCards.length === 1) {
        // when second card is picked, add to the picked array, add identifier

        memoryGame.pickedCards.push(attrib);
        card.classList.toggle("picked");

        // and check the checkIfPair function this will auto add to the pairs clicked so change the display.

        let result = memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        );
        clicked.innerText = memoryGame.pairsClicked;

        // if the pairs match take off identifier, add the blocked tag, show the guessed pairs total, show if finished, and reset the array.

        if (result) {
          document
            .querySelectorAll(".picked")
            .forEach((pic) => pic.classList.toggle("blocked"));
          document
            .querySelectorAll(".picked")
            .forEach((pic) => pic.classList.toggle("picked"));
          guessed.innerText = memoryGame.pairsGuessed;
          memoryGame.pickedCards = [];

          // if finished - you get an alert with your score, the board reset and shuffles.
          if (memoryGame.isFinished()) {
            alert(
              `you have won with a score of ${memoryGame.pairsClicked} try again to see if you can beat your score...`
            );
            setTimeout(() => {
              document
                .querySelectorAll(".blocked")
                .forEach((pic) => pic.classList.toggle("turned"));
              location.reload();
            }, 1000);
          }

          // if the pairs don't match take off identifier, take off the turned tag (with delay...), and reset the array.
        } else {
          console.log(result);

          setTimeout(function () {
            document
              .querySelectorAll(".picked")
              .forEach((pic) => pic.classList.toggle("turned"));
            document
              .querySelectorAll(".picked")
              .forEach((pic) => pic.classList.toggle("picked"));
            console.log("working check");
          }, 1000);

          memoryGame.pickedCards = [];
        }
      }
    });
  });
});
