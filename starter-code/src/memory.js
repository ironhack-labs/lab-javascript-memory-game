var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  var pair = false;
  this.pairsClicked ++;
  if (firstCard.name == secondCard.name && firstCard.img == secondCard.img) {
    this.pairsGuessed ++;
    pair = true;
  }
  return pair;
}

MemoryGame.prototype.isFinished = function () {
  var end = false;
  if (this.pairsGuessed === 12) { end = true; }
  return end;
};