var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  

};

MemoryGame.prototype.shuffleCards = function () {
  this.cards = cards.sort(function() {
    return Math.random() - 0.5;
  })
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard === secondCard){
    this.pairsGuessed ++;
    return true;
  }else{
    return false;
  };
}

MemoryGame.prototype.isFinished = function () {
  isFinished = false;
  if(8 === this.pairsGuessed) {
    isFinished = true;
  }
  return isFinished;
};

