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
      card.classList.toggle("turned");
      console.log(`Card clicked: ${card}`);
      if (pickedCards.length === 0) {
        pickedCards.push(card);
      } else if (pickedCards.length === 1) {
        pickedCards.push(card);
        if (memoryGame.checkIfPair(pickedCards)) {
          pickedCards.splice(0, pickedCards.length);
          guessed.innerText = memoryGame.pairsGuessed;
          clicked.innerText = memoryGame.pairsClicked;
        } else {
          clicked.innerText = memoryGame.pairsClicked;
          setTimeout(() => {
            pickedCards[0].classList.toggle("turned");
            pickedCards[1].classList.toggle("turned");
            pickedCards.splice(0, pickedCards.length);
          }, 1000);
        }
      }
    });
  });
});
