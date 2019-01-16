var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  

};

MemoryGame.prototype.shuffleCards = function() {
  for (var i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;
  if (firstCard == secondCard){
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
}

 MemoryGame.prototype.isFinished = function () {
   if (this.pairsGuessed === this.cards.length/2){
     return true;
   } else {
     return false;
   }
 };