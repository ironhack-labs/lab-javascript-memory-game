var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {

  if (!this.cards || this.cards.length === 0) return
  for (let i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    this.pairsClicked++;
    return false;
  }


}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed==(this.cards.length)/2){
    return true;
  }else{
    return false;
  }
};