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
      // TODO: write some code here

      console.log("card", card);
      // card.classList.toggle("turned");

      card.querySelectorAll(".card div").forEach((square) => {
        square.classList.toggle("front");
        square.classList.toggle("back");
      });

      memoryGame.pickedCards.push(card);
      console.log(memoryGame.pickedCards);

      if (memoryGame.pickedCards.length === 2) {
        // console.log("2 cards picked");

        //check if it's a pair
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        if (
          memoryGame.checkIfPair(
            card1.getAttribute("data-card-name"),
            card2.getAttribute("data-card-name")
          )
        ) {
          //if it's a pair, update the scores:

          document.querySelector("#pairs-clicked").innerHTML =
            memoryGame.pairsClicked;
          document.querySelector("#pairs-guessed").innerHTML =
            memoryGame.pairsGuessed;
          //add blocked class:
          card1.classList.add("blocked");
          card2.classList.add("blocked");

          memoryGame.pickedCards = [];
        } else {
          document.getElementById("pairs-clicked").innerHTML =
            memoryGame.pairsClicked;
          setTimeout(() => {
            card1.querySelectorAll(".card div").forEach((div) => {
              div.classList.toggle("front");
              div.classList.toggle("back");
            });
          }, 1500);
          setTimeout(() => {
            card2.querySelectorAll(".card div").forEach((div) => {
              div.classList.toggle("front");
              div.classList.toggle("back");
            });
          }, 1500);
          memoryGame.pickedCards = [];
        }
      } else {
      }
      // console.log(`Card clicked: ${card}`);
    });
  });
});
