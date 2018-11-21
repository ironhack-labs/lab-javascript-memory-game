var MemoryGame = function (cards) {
  this.cards = cards;
  this.cardCounter = 0;
  this.firstCard = "";
  this.secondCard = "";
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if($(this.firstCard).attr("name") == $(this.secondCard).attr("name")) {
    this.pairsGuessed++;
  }
  else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
};