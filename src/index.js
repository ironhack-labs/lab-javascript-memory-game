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
memoryGame.shuffleCards();

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
  const nameArray = [];
  let isClickable = true;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      if (isClickable) {
        card.classList.add("turned");
        // console.log(card.dataset.cardName);
        const card1 = card.dataset.cardName;
        nameArray.push(card1);
        //console.log(nameArray);
        // console.log(memoryGame.checkIfPair(nameArray[0], nameArray[1]));

        if (nameArray.length === 2) {
          isClickable = false;
          setTimeout(() => {
            isClickable = true;
            if (!memoryGame.checkIfPair(nameArray[0], nameArray[1])) {
              document
                .querySelectorAll(".turned:not(.blocked) ")
                .forEach((element) => element.classList.remove("turned"));
              nameArray.splice(0);
            } else {
              document
                .querySelectorAll(".turned")
                .forEach((element) => element.classList.add("blocked"));
              nameArray.splice(0);
            }
            document.querySelector("#pairs-clicked").innerHTML =
              memoryGame.pairsClicked;
            document.querySelector("#pairs-guessed").innerHTML =
              memoryGame.pairsGuessed;
            // check finished?
            if (memoryGame.checkIfFinished()) {
              alert("Congraduations!!! You won!!");
            }
          }, 800);
          // console.log(`game over? ${memoryGame.checkIfFinished()}`);
          // console.log(`----- ${memoryGame.pairsGuessed} ----`);
        }
      }
    });
  });
});
