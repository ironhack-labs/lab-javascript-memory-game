var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    // Math.floor(Math.random(cards));
    
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
if (firstCard == secondCard){
  this.pairsGuessed ++
  return true
} else {
  this.pairsClicked ++
  return false
} 
}


MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === 8) {
    return true
  } else {
    return false
  }
  
};