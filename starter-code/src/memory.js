var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.cardCounter = 0;
  this.firstCard = "";
  this.secondCard = "";
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  if(!cards) {
    return undefined;
  }
  else {
    let i = this.cards.length, j, temp;

    while(i > 0) {
      j = Math.floor(Math.random() * i);
      i--;
      temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  return this.cards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if($(firstCard).attr("name") === $(secondCard).attr("name")) {
    this.pairsGuessed++;
    return true;
  }
  else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(((this.cards).length / 2) === this.pairsGuessed) {
    return true;
  }
  else {
    return false;
  }
};