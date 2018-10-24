var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

};
  
MemoryGame.prototype.shuffleCards = function() {
    let currentIndex = this.cards.length, temporaryValue, ramdomIndex;
    while (0 !== currentIndex) {
      ramdomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[ramdomIndex];
      this.cards[ramdomIndex] = temporaryValue;
    }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
  }
  return firstCard === secondCard;
};

MemoryGame.prototype.isFinished = function() {
  return this.pairsGuessed === this.cards.length / 2;
};
