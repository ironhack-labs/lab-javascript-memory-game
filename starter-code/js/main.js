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
memoryGame.shuffleCards();

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
      if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle("turned");
        card.classList.toggle("picked");
        const name = card.getAttribute('data-card-name');
        const pos = memoryGame.cards.map(function(e) { return e.name; }).indexOf(name);
        memoryGame.pickedCards.push(memoryGame.cards[pos]);
      }
      
      if (memoryGame.pickedCards.length === 2) {
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].name, memoryGame.pickedCards[1].name)) {
          // Turn the cards again
          document.querySelectorAll('.picked').forEach(card => {
            setTimeout(function(){ 
              card.classList.remove('turned'); 
            }, 500);
          })
        }
        else {
          document.querySelector('#pairs_guessed').innerText = memoryGame.pairsGuessed;

          if (memoryGame.isFinished()) {
            setTimeout(function(){ 
              alert('YOU WON!');
            }, 500);
          }
        }

        document.querySelectorAll('.picked').forEach(card => {
          card.classList.remove('picked');
        })

        memoryGame.pickedCards = [];
        document.querySelector('#pairs_clicked').innerText = memoryGame.pairsClicked;
      }
    });
  });
});
