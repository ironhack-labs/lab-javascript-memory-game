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
  memoryGame.shuffleCards(cards);
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Restart function
  document.getElementById("restart").addEventListener("click", () => {
    location.reload();
  });
  
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      // TODO: write some code here
    if (memoryGame.pickedCards.length < 3) {
      card.classList.toggle("turned");
      memoryGame.pickedCards.push(card.dataset.cardName);
      let cardone = memoryGame.pickedCards[0];
      let cardtwo = memoryGame.pickedCards[1];
      if (memoryGame.pickedCards.length === 2) {
        if (memoryGame.checkIfPair(cardone, cardtwo)) {
          document.querySelectorAll(".turned").forEach(selected => {
            selected.classList.toggle("turned");
            selected.classList.toggle("blocked");
          }); 
          memoryGame.pickedCards.splice(0, 2);
          if (memoryGame.isFinished()) {
            document.getElementById("youwin").classList.toggle("visible");
          }
        } else {
          const timeoutId = setTimeout(function() {
            document.querySelectorAll(".turned").forEach(selected => {
              selected.classList.toggle("turned");
            }); 
            memoryGame.pickedCards.splice(0, 2);
          }, 700);
        } 
      }
      document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked;
      document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed;
    };
    });
   
  });
  
});
