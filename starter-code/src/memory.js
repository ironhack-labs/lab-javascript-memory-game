var MemoryGame = function (cards) {
  this.cards = cards;
 
};
 MemoryGame.prototype.pickedCards = [];
 MemoryGame.prototype.pairsClicked=0;
MemoryGame.prototype.pairsGuessed=0;


MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length, t, i;

  
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  
    


}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  }else {
    this.pairsClicked += 1;
    return false;
  }
  
}


MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length /2) {
    return true;
  }
  return false;
};