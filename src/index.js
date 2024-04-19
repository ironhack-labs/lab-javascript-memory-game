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
  memoryGame.shuffleCards();
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

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      console.log(card);
      turnCard(card);
    });
  });
});

function turnCard(card) {
  card.classList.add("turned");
  console.log(card);
  memoryGame.pickedCards.push(card);
  if (memoryGame.pickedCards.length === 2) {
    let card1 = memoryGame.pickedCards[0]
      .querySelector(".back")
      .getAttribute("name");
    let card2 = memoryGame.pickedCards[1]
      .querySelector(".back")
      .getAttribute("name");
    const response = memoryGame.checkIfPair(card1, card2);
    const clickedPairs = memoryGame.pairsClicked;
    const clickedCounter = document.querySelector("#pairs-clicked");
    clickedCounter.innerHTML = clickedPairs;
    if (response === true) {
      memoryGame.pickedCards = [];
      document.querySelector("#pairs-guessed").innerHTML =
        memoryGame.pairsGuessed;
      const isFinished = memoryGame.checkIfFinished();
      if (isFinished) alert("Has ganado");
    } else {
      // eliminar la clase turned
      setTimeout(() => {
        memoryGame.pickedCards.forEach((card) => {
          card.classList.remove("turned");
          memoryGame.pickedCards = [];
        });
      }, 1000);
    }
  }
}
