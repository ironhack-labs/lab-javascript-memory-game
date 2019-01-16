
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  
};


MemoryGame.prototype.shuffleCards = function () {
  
  var firstLocation = 0
  var secondLocation = 0;
  var largeCards = this.cards.length;
  var tempContent;
debugger
  for (var i=0; i < 20; i++){
    firstLocation = (Math.floor(Math.random()*largeCards));
    secondLocation = (Math.floor(Math.random()*largeCards));
    tempContent = cards[secondLocation];
    this.cards[secondLocation] = this.cards[firstLocation];
    this.cards[firstLocation] = tempContent;
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard,secondCard) {
  this.pairsClicked = this.pairsClicked + 1;
  if (firstCard === secondCard) {
    this.pairsGuessed = this.pairsGuessed + 1;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === (this.cards.length/2)){
    return true;
  }
  return false;
};