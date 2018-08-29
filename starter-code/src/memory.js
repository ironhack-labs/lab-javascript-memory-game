var MemoryGame = function (cards) {
  this.cards = cards;
  this.clicks = 0;
  this.guessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for (let i = 0; i < this.cards.length ; i++) {
    let random = Math.floor(Math.random()* (this.cards.length));
    let temp = this.cards[i];
    this.cards[i] = this.cards[random];
    this.cards[random] = temp;
  }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.clicks++;
  if (firstCard === secondCard) {
    this.guessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.guessed === this.cards.length / 2) return true;
  return false;
};