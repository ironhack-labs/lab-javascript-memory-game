var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function() {
    return 0.5 - Math.random();
  });
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed >= this.cards.length/2){
    return true;
  }
  return false;
};