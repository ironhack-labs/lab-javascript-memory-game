// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
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
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = "";
  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(" ").join("_");

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="' + pic.name + '">';
    html += "</div>";
    html += "</div>";
  });

  // Add all the divs to the HTML
  document.getElementById("memory_board").innerHTML = html;
  $(".card").on("click", function() {
    $(this)
      .children()
      .toggleClass("back", "front");
    var cardToCheck = $(this).attr("name");
    memoryGame.selectCards(cardToCheck);
    if (memoryGame.selectedCards.length == 2) {
      memoryGame.checkCards();
    }
  });
});

// shuffle

MemoryGame.prototype._shuffleCards = function() {
  var j = 0;
  var temp = null;
  for (var i = 23; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
  return this.cards;
};

//select cards
MemoryGame.prototype.selectCards = function(card) {
  this.selectedCards.push(card);
  console.log(this.selectedCards);
};

//check cards I can't get the cards to flip back I tried with $(this)
//.children()
//.toggleClass("back", "front");
MemoryGame.prototype.checkCards = function() {
  console.log(this.selectedCards);
  this.pairsClicked += 1;
  if (this.selectedCards[0] === this.selectedCards[1]) {
    this.correctPairs += 1;
    this.selectedCards = [];
    console.log("Match");
  } else {
    this.selectedCards = [];
    console.log("not A match");
  }
};
