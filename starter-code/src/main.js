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
      var cardParent = card.parentNode; //A div element containing front and back
      var cardName = cardParent.getAttribute("data-card-name"); //Get card name from data-card-name attribute

      memoryGame.pickedCards.push(cardName);
      if (memoryGame.pickedCards.length <= 2) {
        flipCard(card);
      }
      console.log(memoryGame.pickedCards);
      if (memoryGame.pickedCards.length === 2) {
        if (
          memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          )
        ) {
          blockCardsByName(cardName);
          memoryGame.pickedCards = [];
        } else {
          unflipNonBlocked();
          memoryGame.pickedCards = [];
        }
      }

      if(memoryGame.pickedCards.length > 2) {
        unflipNonBlocked();
        memoryGame.pickedCards = [];
      }
    };
  });
});

function flipCard(card) {
  card.className = "front"; //front
  card.nextSibling.className = "back"; //back
}

function unflipCard(card) {
  card.className = "back"; //front
  card.nextSibling.className = "front"; //back
}

function unflipNonBlocked() {
  console.log("Unflip non blocked");
  var allFronts = document.querySelectorAll('.front');

  allFronts.forEach((card) => {
    console.log(card.classList);
    if(card.classList.contains("blocked") > 0){
      unflipCard(card);
    }
  });
}

function blockCardsByName(name) {
  console.log("Blocking cards by name " + name);
  var desiredCards = document.querySelectorAll(`[data-card-name="${name}"]`);
  desiredCards.forEach((card) => {
    card.querySelector('.front').classList.add('blocked');
    card.querySelector('.back').classList.add('blocked');
  });
}
