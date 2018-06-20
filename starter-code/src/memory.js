
function MemoryGame(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairsGuessed = [];
}

MemoryGame.prototype.shuffleCards = function () {
  return _.shuffle(this.cards);
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked.push([firstCard, secondCard]);
  if (firstCard.name === secondCard.name) {
    this.pairsGuessed.push([firstCard, secondCard]);
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed.length === this.cards.length;
};

MemoryGame.prototype.bufferCard = function (e) {
  if (this.pickedCards.length) {
    if ((this.pickedCards[0].x != e[0].x) &&
      (this.pickedCards[0].y != e[0].y))
      return this.pickedCards.push(e); //2=true
    return false;
  }
  return this.pickedCards.push(e) - 1; //1-1=0=false
}
