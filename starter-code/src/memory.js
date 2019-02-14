var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for (i=0; i<this.cards.length; i++){
  var s = Math.floor(Math.random() * (this.cards.length-i))+0;
  this.cards[i] = this.cards[s]}
}



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked = this.pairsClicked + 1;
  if (firstCard == secondCard) {
    this.pairsGuessed = this.pairsGuessed + 1;  
    return true
  } else {
    return false
  } 
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed == this.cards.length/2) {
    return true;
  } else {
    return false;
  }
}

