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

let tempCards = [];
let clicks = 0;
let test = "";

window.addEventListener("load", event => {
  let html = "";
  memoryGame.shuffleCards();
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
      document.getElementById("pairs_clicked").innerHTML =
        memoryGame.pairsClicked;

      if (clicks < 2) {
        tempCards.push(card);
        card.className += " turned";
        clicks++;
        if (clicks == 2) {
          card1 = tempCards[0].childNodes[1].outerHTML;
          card2 = tempCards[1].childNodes[1].outerHTML;

          if (memoryGame.checkIfPair(card1, card2)) {
            test = "true";
            document.getElementById("pairs_guessed").innerHTML =
              memoryGame.pairsGuessed;
            document.getElementById("pairs_clicked").innerHTML =
              memoryGame.pairsClicked;
            if (memoryGame.isFinished() == true) {
              victory();
            }
          }
          I;
        }
      } else if (clicks == 2 && test == "true") {
        test = "";
        tempCards = [];
        clicks = 0;
        tempCards.push(card);
        card.className += " turned";
        clicks++;
      } else {
        tempCards[0].className = "card";
        tempCards[1].className = "card";
        tempCards = [];
        clicks = 0;
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});

function victory() {
  document.getElementById("memory_board").style.display = "none";
  document.getElementById("victory").style.display = "flex";
}
