var cards = [
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

// when the program starts, an instance of the class Memory Game is created
// the cards are shuffled thanks to the class method shuffleCards()
var memoryGame = new MemoryGame(cards);

//the document is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });
  document.querySelector("#memory_board").innerHTML = html;

  // the game is waiting for an user input...
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      //au début de l'essai le tableau pickedCards est vide
      if (memoryGame.pickedCards.length < 2) {
        var clickedCard = card.getAttribute("name");
        memoryGame.pickedCards.push(clickedCard);
        card.classList.remove("back");
        card.classList.add("front");

        const frontCard = card.nextElementSibling;
        frontCard.classList.add("back");
        frontCard.classList.remove("front");
      }
      if (memoryGame.pickedCards.length === 2) {
        const pairMatches = memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        );

        //resterait : quand la paire est cliquée et qu'elle est checkée, if true, les card gardent leurs classes et le score s'incrémente, if false, elles flippent +
        //pickedCars est vidé
        //si la partie n'est pas fini, on recommence
      }
    };
  });
});
//<!-- Only display the back that is blue -->
//<div class= "card" data-card-name="ironman">
//<div class="back" name="ironman.jpg"></div>
//<div class="front" style="background: url(img/ironman.jpg) no-repeat"></div>
//</div>

//<!-- After flipping (back and front are reverted) -->

//<!-- Only display the back that has a ironman background image -->
//<div class= "card" data-card-name="ironman">
//<div class="front" name="ironman.jpg"></div>
//<div class="back" style="background: url(img/ironman.jpg) no-repeat"></div>
///<div>
