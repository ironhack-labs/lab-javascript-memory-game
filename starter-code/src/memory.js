var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[]
  this.pairsClicked = 0;
  this.pairsCards= []
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
 
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++;
  if (firstCard === secondCard) {
  this.pairsGuessed++;
  return true;
} else {
  this.paisClicked++;
  return false;
}
};



MemoryGame.prototype.isFinished = function () {
