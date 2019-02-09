// Constructor
var MemoryGame = function (cards) {
  this.cards = cards,
  this.pickedCards = [],
  this.pairsClicked = 0,
  this.pairsGuessed = 0
};

// Method for shuffle the cards
MemoryGame.prototype.shuffleCards = function (cards) {
  var j, x, i;
  for(var i = cards.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = cards[i];
    cards[i] = cards[j];
    cards[j] = x;
  }
  return cards;
};

// Method that returns alert, informing that you guessed all the cards
MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed == 12 ? alert('Well played') : '';
};