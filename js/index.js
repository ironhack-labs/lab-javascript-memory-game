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
let clickable = true;

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  let pickedCards = memoryGame.pickedCards;
  let clicked = document.querySelector("#pairs-clicked");
  let guessed = document.querySelector("#pairs-guessed");
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      if (clickable) {
        card.classList.add("turned");
        console.log(`Card clicked: ${card}`);
        if (pickedCards.length === 0) {
          pickedCards.push(card);
        } else {
          pickedCards.push(card);
          clickable = false;
          if (memoryGame.checkIfPair(pickedCards[0], pickedCards[1])) {
            guessed.innerText = memoryGame.pairsGuessed;
            clicked.innerText = memoryGame.pairsClicked;
            clickable = true;
            pickedCards.splice(0, pickedCards.length);
          } else {
            clicked.innerText = memoryGame.pairsClicked;
            setTimeout(() => {
              pickedCards[0].classList.remove("turned");
              pickedCards[1].classList.remove("turned");
              pickedCards.splice(0, pickedCards.length);
              clickable = true;
            }, 700);
          }
        }
        if (memoryGame.isFinished()) {
          setTimeout(
            () =>
              alert(`You won the game after ${memoryGame.pairsClicked} tries!`),
            300
          );
        }
      }
    });
  });
});
