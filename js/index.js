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

const guessedPairCount = document.querySelector("#pairs-guessed");
const clickedPairCount = document.querySelector("#pairs-clicked");

window.addEventListener("load", (event) => {
  memoryGame.shuffleCards(cards);
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  document.querySelector("#memory-board").innerHTML = html;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      let card1;
      let card2;

      let timeout;

      card.querySelectorAll(".card div").forEach((div) => {
        div.classList.toggle("front");
        div.classList.toggle("back");
      });

      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
        card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");

        if (memoryGame.checkIfPair(card1, card2)) {
          guessedPairCount.innerHTML = memoryGame.pairsGuessed;
          if (memoryGame.isFinished()) {
            setTimeout(function () {
              alert("Great job!");
            }, 1000);
          }
          return (memoryGame.pickedCards = []);
        } else if (!memoryGame.checkIfPair(card1, card2)) {
          memoryGame.pickedCards.forEach((card) => {
            timeout = setTimeout(function () {
              card.querySelectorAll(".card div").forEach((div) => {
                div.classList.toggle("front");
                div.classList.toggle("back");
              });
            }, 2000);
          });
          return (memoryGame.pickedCards = []);
        }
      }
      clickedPairCount.innerHTML = memoryGame.pairsClicked;
    });
  });
});
