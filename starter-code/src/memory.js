// Constructor creation
function MemoryGame(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

// Shuffle method
MemoryGame.prototype.shuffleCard = function(cards) {
  for (var i = 0; i < cards.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (cards.length - i));
    var iCard = cards[i];
    var jCard = cards[j];
    cards[i] = jCard;
    cards[j] = iCard;
  }
  return cards;
};

// check if pair
MemoryGame.prototype.checkIfPair = function(card1, card2) {
  this.pairsClicked += 1;
  if (card1 === card2) {
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
};

// finished
// MemoryGame.prototype.finished = function() {
//   if (this.pairsGuessed === 0) {
//     return false;
//   } else if (this.pairsGuessed === this.cards.length / 2) {
//     return true;
//   } else if (
//     this.pairsGuessed > 0 &&
//     this.pairsGuessed < this.cards.length / 2
//   ) {
//     return false;
//   }
// };

MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed < 12) {
    return false;
  } else {
    return true;
  }
};
