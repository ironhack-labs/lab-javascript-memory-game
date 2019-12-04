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
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", event => {
  memoryGame.shuffleCards();
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      card.setAttribute("class", "card turned");
      console.log(`Card clicked: ${card}`);
      memoryGame.pickedCards.push(card);

      let card1 = memoryGame.pickedCards[0];
      let a1 = card1.getAttribute("data-card-name");

      if (memoryGame.pickedCards.length > 1) {
        let card2 = memoryGame.pickedCards[1];
        let a2 = card2.getAttribute("data-card-name");

        if (memoryGame.checkIfPair(a1, a2) === true) {
          pairs_clicked.innerHTML = memoryGame.pairsClicked;
          pairs_guessed.innerHTML = memoryGame.pairsGuessed;
        } else {
          pairs_clicked.innerHTML = memoryGame.pairsClicked;
        }

        if (a1 !== a2) {
          setTimeout(function() {
            card1.setAttribute("class", "card");
            card2.setAttribute("class", "card");
          }, 1500);
        }

        memoryGame.pickedCards.splice(0, 2);
      }

      if (memoryGame.isFinished() === true) {
        alert("You won!!!");
      }
    });
  });
});
