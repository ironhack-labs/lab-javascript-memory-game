var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (arr) {
  for (var i = this.cards.length - 1; i > 0; i++) {
    var a = Math.floor(Math.random() * arr.length);
    [this.cards[i], this.cards[a]] = [this.cards[a], this.cards[i]];
}
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  if(firstCard === secondCard){
    this.pairsClicked ++;
    this.pairsGuessed ++;
    return true;
    
  } else {
    this.pairsClicked ++;
    return false;
  }



}

MemoryGame.prototype.isFinished = function () {

  if(this.pairsGuessed === this.cards.length/2) {
    return true;
  } 
  return false;
};


