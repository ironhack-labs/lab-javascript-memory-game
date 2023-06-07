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
  // memoryGame.shuffleCards();
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
    card.addEventListener("click", (e) => {
      // TODO: write some code here
      console.log(card.getAttribute("data-card-name"));
      console.log(card.attributes);

      card.classList.toggle("turned");

      // Incrementing "Pairs Clicked" with each click
      const pairsClicked = document.querySelector("#pairs-clicked");
      pairsClicked.innerHTML++;
      // checkIfPair functionality
      const pairsGuessed = document.querySelector("#pairs-guessed");
      memoryGame.pickedCards.push(card.getAttribute("data-card-name"));

      const first = memoryGame.pickedCards[0];
      const second = memoryGame.pickedCards[1];
      console.log(first, second);
      if (memoryGame.pickedCards.length === 2) {
        memoryGame.pickedCards = [];
        // setTimeout(() => {
        //   card.classList.add("turned");
        //   card.classList.add("turned");
        // }, 1000);
        if (memoryGame.checkIfPair(first, second)) {
          pairsGuessed.innerHTML++;
          setTimeout(() => {
            card.classList.remove("turned");
            card.classList.remove("turned");
          }, 1000);
        }
      }

      memoryGame.checkIfFinished(memoryGame.pairsGuessed);
    });
  });
});
