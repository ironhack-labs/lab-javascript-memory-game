var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  let randomNumber = 0;
  let n = this.cards.length;
  while (n >= 0) {
    randomNumber = Math.floor(Math.random() * this.cards.length);
    this.pickedCards.push(this.cards[randomNumber]);
    delete this.cards[randomNumber];
    n -= 1;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard) {
    this.pairsClicked += 1;
    this.pairsGuessed += 1;
    return true;
  }
  this.pairsClicked += 1;
  return false;
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsClicked === 0) {
    return false;
  }
  if (this.pairsGuessed >= 12) {
    return true;
  }
  return false
};