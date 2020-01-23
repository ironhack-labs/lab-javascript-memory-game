// jshint esversion: 6

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

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  function turnUnmatchedCards(card1, card2) {
    card1.classList.toggle("turned");
    card2.classList.toggle("turned");
  }

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("turned", true);    // player can only turn card face up   
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        const match = memoryGame.checkIfPair(card1.getAttribute('data-card-name'), card2.getAttribute('data-card-name'));
        if (!match) {
          (function () {
            setTimeout(function(){
              turnUnmatchedCards(card1, card2);
            }, 1000);
          })();
        }
        memoryGame.pickedCards.splice(0,2);
      }
      document.getElementById('pairs_clicked').textContent = memoryGame.pairsClicked;
      document.getElementById('pairs_guessed').textContent = memoryGame.pairsGuessed;
      if (memoryGame.isFinished()) {
        document.getElementById('memory_board').innerHTML = `<img src="https://media.giphy.com/media/3o7aCReOCepWnsNuSs/giphy.gif">`;
      }
    });
  });
});