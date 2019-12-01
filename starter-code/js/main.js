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
memoryGame.shuffleCards(); //shuffle the cards
window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  //store the span containing the score
  let clicked = document.getElementById("pairs_clicked");
  let guessed = document.getElementById("pairs_guessed");
  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      card.classList.toggle("turned"); // turn the card
      memoryGame.pickedCards.push(card); //select the picked card to manipulate
      if (memoryGame.pickedCards.length == 2) {
        /*let compare = memoryGame.checkIfPair(
          (memoryGame.pickedCards[0].getAttribute("data-card-name")),
          (memoryGame.pickedCards[1].getAttribute("data-card-name"))
        );*/
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];
        let compare = memoryGame.checkIfPair(
          card1.getAttribute("data-card-name"),
          card2.getAttribute("data-card-name")
        );
        if (compare === true) {
          guessed.innerHTML = memoryGame.pairsGuessed.toString();
          memoryGame.pickedCards.splice(0,2);
        } else {
          setTimeout(function() {
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
            memoryGame.pickedCards.splice(0,2)
          }, 600)
        } 
      }
      clicked.innerHTML = memoryGame.pairsClicked.toString()  //refresh the score
      if (memoryGame.isFinished()) {alert("You Won!")}
      console.log(`Card clicked: ${card}`);
    });
  });
});
