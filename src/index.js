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
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      if (memoryGame.pickedCards.length === 2){
        memoryGame.pickedCards = []
      }
      
      if(!card.classList.contains("turned")){
        card.classList.toggle("turned", true);
      }

      // put two cards in the picked card array
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
      }
      console.log(memoryGame.pickedCards);
      console.log("picked cards", memoryGame.pickedCards);

      // check if there is a pair
      if (memoryGame.pickedCards.length === 2) {
        const isPair = memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        );
        console.log(
          "data card name ",
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        );
        console.log("a pair? ", isPair);

        // keep track of the pairs clicked and guessed
        let pairsClicked = document.getElementById("pairs-clicked");
        let pairsGuessed = document.getElementById("pairs-guessed");

        pairsClicked.innerText = memoryGame.pairsClicked;
        pairsGuessed.innerText = memoryGame.pairsGuessed;

        // if it is a pair it gives them the class blocked
        if (isPair === true) {
          memoryGame.pickedCards.forEach((element) => {
            element.classList.toggle("blocked", true);
          });
        }
        // if its not a pair the timeout function is started and the cards are turned over
        setTimeout(() => {
          console.log("going into the timeout function");
          memoryGame.pickedCards.forEach((element) => {
            if (!element.classList.contains("blocked")) {
              element.classList.toggle("turned", false);
            }
          });
        }, 2000);
        const isFinished = memoryGame.checkIfFinished()
        if (isFinished){
          alert("You have won!")
        }
      }
    });
  });
});
