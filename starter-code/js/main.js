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
memoryGame.shuffleCards(); //Shuffle cards at the begining of the game

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
      console.log(`Card clicked: ${JSON.stringify(card)}`);

      card.classList.add('turned'); // Add turned class to card div

      memoryGame.pickedCards.push(card); // Add to pickedCards array

      if(memoryGame.pickedCards.length == 2) {  // Check if there are two cards selected
        
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name"))) {  // The cards are the same
          // Add blocked class to both cards and fix them
          memoryGame.pickedCards[0].classList.add('blocked'); 
          memoryGame.pickedCards[1].classList.add('blocked');
          memoryGame.pickedCards = []; // Reset picked array

        } else {
          // Wait 1 sec and flip cards to their original state removing class 'turned'
          setTimeout(function() { 
            removeClass([memoryGame.pickedCards[0], memoryGame.pickedCards[1]], 'turned'); 
            memoryGame.pickedCards = []; // Reset picked array
          },1000);
        }

        // Update scores and check whether the game has finished
        updateScores();
        checkEndGame();
      }

    });
  });
});

function removeClass(cards, clase){
  cards.forEach(function(card) {
    card.classList.remove(clase);
  });
}

function updateScores(){
  let pClicked = document.getElementById('pairs_clicked');
  let pGuessed = document.getElementById('pairs_guessed');
  pClicked.innerHTML = memoryGame.pairsClicked;
  pGuessed.innerHTML = memoryGame.pairsGuessed;
}

function checkEndGame(){
  if(memoryGame.isFinished()) {
    let scoreText = document.getElementsByTagName('h2');
    scoreText[0].style.color = '#FFFF00';
    scoreText[0].innerHTML = 'You won!!!';
  }
}