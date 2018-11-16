var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function() {
    return Math.random() - 0.5;
  })
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
  };
  return (firstCard === secondCard);
}

MemoryGame.prototype.isFinished = function () {
  
return this.pairsGuessed == (this.cards.length / 2);
};

MemoryGame.prototype.clearPickedCards = function () {
  
  this.pickedCards = [];
}

MemoryGame.prototype.resetGame = function () {
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.shuffleCards();
}