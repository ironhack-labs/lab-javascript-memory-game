var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var newCardSet = [];
  
  for(let i = 0; i < this.cards.length; i++){
    var ranIndex = Math.floor(Math.random() * Math.floor(this.cards.length));
    newCardSet.push(this.cards[ranIndex]);
  }
  
  this.cards = newCardSet;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
  
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length/2){
    return true;
  }
  return false;

};