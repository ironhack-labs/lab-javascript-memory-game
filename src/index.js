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

  // Bind the click event of each element to a function

  let counter = 0;
  let firstCard;
  let secondCard;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (event) => {
      // TODO: write some code here
      // memoryGame.shuffleCards(card);
      if (counter === 0) {
        console.log(counter);
        card.setAttribute("class", "card turned");
        firstCard = card.getAttribute("data-card-name");
        console.log(`Card clicked: ${card}`);
        counter += 1;
      } else if (counter === 1) {
        card.setAttribute("class", "card turned");
        secondCard = card.getAttribute("data-card-name");

        console.log(counter);
        console.log(`Card clicked2: ${card}`);
        counter = 0;
      }
      console.log(firstCard, secondCard);
      setTimeout(() => {
        if (memoryGame.checkIfPair(firstCard, secondCard)) {
          document.querySelectorAll(".card.turned").forEach((turnedCard) => {
            turnedCard.classList.add("blocked");
          });
        } else if (!memoryGame.checkIfPair(firstCard, secondCard)) {
          document.querySelectorAll(".card.turned").forEach((turnedCard) => {
            turnedCard.classList.remove("turned");
          });
        }
      }, 2000);
    });
  });
});
