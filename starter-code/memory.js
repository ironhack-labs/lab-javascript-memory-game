// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function () {
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
    { name: "thor", img: "thor.jpg" },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

MemoryGame.prototype._suffleCards = function () {
  this.cards = _.shuffle(this.cards);
}

MemoryGame.prototype.theCard = function (card) {
  this.selectedCards.push(card);
};

MemoryGame.prototype.compareCards = function () {
  this.pairsClicked += 1;
  if (this.selectedCards[0].attr('name') === this.selectedCards[1].attr('name')) {
    console.log("Acierto");
    this.correctPairs += 1;
    this.selectedCards = [];
    return true;
  } else {
    console.log("ERROR");
    this.selectedCards = [];
    return false;
  }
};