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

  function flipCards(e){
    e.currentTarget.classList.toggle("turned", true);
    var card = e.currentTarget;
    memoryGame.pickedCards.push(card);
    console.log(memoryGame.pickedCards)
  }
  
  function unflipCards(){
    console.log("unflipcalled")
       setTimeout(function(){
        memoryGame.pickedCards[0].className = "card";
        memoryGame.pickedCards[1].className = "card";
        console.log("unflip triggered");
        memoryGame.pickedCards = [];
    }, 1000);}


    function processCards(){
      var card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
      var card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
      console.log(card1, card2)
     if (memoryGame.checkIfPair(card1, card2) === false){
        unflipCards();
      } else if (memoryGame.checkIfPair(card1, card2) === true){
        memoryGame.pickedCards = [];
      }
    }

  function checkPairs(){
    if (memoryGame.pickedCards.length == 2){
        processCards();
      }
      document.getElementById("pairs_clicked").innerHTML = String(memoryGame.pairsClicked);
      document.getElementById("pairs_guessed").innerHTML = String(memoryGame.pairsGuessed);
    }
  
  function checkGameOver(isOver){
     if (isOver === true){
      alert("You found all matches!");
    }
  }

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      // TODO: write some code here
      flipCards(e);
      checkPairs();
      checkGameOver(memoryGame.isFinished());
    });
  });
});

memoryGame.shuffleCards();
