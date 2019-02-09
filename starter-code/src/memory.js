var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if(firstCard === secondCard) {
    this.pairsGuessed ++;
    return true
  }
  if(firstCard != secondCard) return false
  
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed < 12){
    return false
  }else if(this.pairsGuessed = 12){
    return true
  }else {
    return false
  }
 
};