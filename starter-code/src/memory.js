var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  for (i = this.cards.length - 1; i > 0; i--) {
    var j = getRandom(0, i);
    var tmp = this.cards[j];
    this.cards[j] = this.cards[i];
    this.cards[i] = tmp;
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
};

MemoryGame.prototype.isFinished = function() {
  if (this.cards.length == 0) return false;

  return (this.pairsGuessed == this.cards.length / 2);
};

function getRandom(min, max) {
  return Math.floor(Math.random() * max + min);
}
