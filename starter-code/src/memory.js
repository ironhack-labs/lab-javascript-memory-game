var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function () {
    return Math.random() - 0.5;
  })
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;

  if (firstCard === secondCard) {
    this.pairsGuessed ++;
    return true;
  } else {
  return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  var pairs = this.cards.length / 2;
  if (this.pairsGuessed === pairs) {
    return true;
  }
  return false;
};