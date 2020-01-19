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
memoryGame.shuffleCards(memoryGame.cards)

function updateMark(){
  document.getElementById("pairs_clicked").innerText = memoryGame.pairsClicked
  document.getElementById("pairs_guessed").innerText = memoryGame.pairsGuessed
}

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
      card.classList.add("turned")
      memoryGame.pickedCards.push(card)
      if(memoryGame.pickedCards.length === 2){
        document.getElementById("memory_board").style="pointer-events: none"
        setTimeout(function(){
          let card1Name = memoryGame.pickedCards[0].getAttribute('data-card-name')
          let card2Name = memoryGame.pickedCards[1].getAttribute('data-card-name')
          let same = memoryGame.checkIfPair(card1Name, card2Name)
          if(same){
            if(memoryGame.isFinished()){
              if (confirm("You won!! Restart?")) {
                location.reload()
              }
            }
          } else {
            memoryGame.pickedCards[0].classList.remove("turned")
            memoryGame.pickedCards[1].classList.remove("turned")
          }
          memoryGame.pickedCards = [];
          updateMark()
          document.getElementById("memory_board").style=""
        }, 2000);
      }
    });
  });
});
