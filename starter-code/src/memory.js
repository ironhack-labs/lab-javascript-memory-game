var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var newCards = [];
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
  if (this.pairsGuessed === (this.cards.length) / 2)  return true;
  return false;
};