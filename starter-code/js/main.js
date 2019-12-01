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
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  let gameOver = '<div id="win">You Win!</div>';

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  let clickedScore = document.getElementById("pairs_clicked")
  let guessedScore = document.getElementById("pairs_guessed")
  let flippedCards = memoryGame.pickedCards

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      if(card.className != "card blocked"){
        card.className += " turned"
        flippedCards = document.getElementsByClassName("card turned")
        if(flippedCards.length == 2){
          let card1 = flippedCards[0]
          let card2 = flippedCards[1]
          setTimeout(function(){
            if(memoryGame.checkIfPair(card1.getAttribute("data-card-name"), card2.getAttribute("data-card-name"))){
              card1.className = "card blocked"
              card2.className = "card blocked"
              if(memoryGame.isFinished){
                document.querySelector("#memory_board").innerHTML += gameOver
              }
            } else {
              card1.className = "card"
              card2.className = "card"
            }
            clickedScore.innerHTML = memoryGame.pairsClicked
            guessedScore.innerHTML = memoryGame.pairsGuessed
          }, 1000)
        }
      }
    });
  })
});
