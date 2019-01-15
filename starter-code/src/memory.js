var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard == secondCard) {
    this.pairsGuessed++
    this.pickedCards = []
    return true
}
  this.pairsClicked++;
  this.pickedCards = []
  return false 
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed == (this.cards.length / 2)) {
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    return true
  }
  return false
};