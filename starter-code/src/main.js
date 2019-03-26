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
var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

document.addEventListener("DOMContentLoaded", function(event) {
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '<div class="back" name="' + pic.img + '"></div>';
    html +=
      '<div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  // card is a div element with "back" class
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      console.log("Card clicked");
      var cardParent = card.parentNode; //A div element containing front and back
      console.log(cardParent);

      var cardName = cardParent.getAttribute("data-card-name"); //Get card name from data-card-name attribute

      if (memoryGame.pickedCards.length <= 2) {
        memoryGame.pickedCards = [];

        card.className = "front"; //front
        card.nextSibling.className = "back"; //back
      }
      memoryGame.pickedCards.push(cardName);

      if (
        memoryGame.pickedCards.length === 2 &&
        memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        )
      ) {
        console.log("YEAH");
        memoryGame.pickedCards = [];
        console.log(memoryGame.pairsGuessed);
        var flippedCards = document.querySelectorAll(`.card[data-card-name = ${memoryGame.pickedCards[0]}]`)
        flippedCards.forEach(function (flippedCard) {
          console.log(flippedCard);
          flippedCard.childNodes.forEach((frontOrBack) => {
            frontOrBack.classList.add('.blocked');
          });
        });
      }
      console.log(memoryGame.pickedCards);
    };
  });
});
