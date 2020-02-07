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
    card.addEventListener("click", (e) => {
      // TODO: write some code here
      card.classList.toggle("turned");

      let card1Att;
      let card2Att;
      let clicked = document.querySelector("#pairs_clicked");
      let guessed = document.querySelector("#pairs_guessed");;

  
      memoryGame.pickedCards.push(e.target.parentElement);
      
      if (memoryGame.pickedCards.length === 2){
        card1Att = memoryGame.pickedCards[0].getAttribute('data-card-name');
        card2Att = memoryGame.pickedCards[1].getAttribute('data-card-name');
        
        if (memoryGame.checkIfPair(card1Att, card2Att)) {
          
          memoryGame.pickedCards = [];
        } else {
          
          setTimeout(function() {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 750);

        }

        
      }
      
      clicked.innerHTML = memoryGame.pairsClicked;
      guessed.innerHTML = memoryGame.pairsGuessed;


      if (memoryGame.isFinished()) {
        document.querySelector("#end").style.visibility = "visible";
      }

    });
  });
});