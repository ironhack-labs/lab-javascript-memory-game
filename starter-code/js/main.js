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
memoryGame.shuffleCards(memoryGame.cards);

window.addEventListener("load", event => {
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
      card.classList.add("turned");
      memoryGame.pickedCards.push(card);

      console.log(`Card clicked: ${card}`);

      if (memoryGame.pickedCards.length === 2){
        setTimeout (function(){
          if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name"))){
            memoryGame.pickedCards[0].classList.add("blocked");
            memoryGame.pickedCards[1].classList.add("blocked");
            memoryGame.pickedCards = [];
            let clicked = document.getElementById("pairs_clicked");
            clicked.innerHTML= memoryGame.pairsClicked;
            let guessed = document.getElementById("pairs_guessed");
            guessed.innerHTML= memoryGame.pairsGuessed;
          } else {
              memoryGame.pickedCards[0].classList.remove("turned");
              memoryGame.pickedCards[1].classList.remove("turned");
              memoryGame.pickedCards = [];
              let clicked = document.getElementById("pairs_clicked");
              clicked.innerHTML= memoryGame.pairsClicked;
            }
          if (memoryGame.isFinished() === true){
              console.log(memoryGame.isFinished());
              alert('You won!!!');
              location.reload();
          }
        }, 300);
      }
      console.log(memoryGame.isFinished());
    });
  });
});
