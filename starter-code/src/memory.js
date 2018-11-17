var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var j, x, i;
  //metodo de burbuja :v
  for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = cards[i];
      this.cards[i] = cards[j];
      this.cards[j] = x;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard == secondCard){
    this.pairsGuessed += 1;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  return (this.cards.length / 2) == this.pairsGuessed;
};
