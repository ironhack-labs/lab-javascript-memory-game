var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsMatched = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function () {
    return Math.random() - 0.5;
  })
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  var pairedCards = false;
  this.pairsClicked++;
  if(firstCard === secondCard) {
    pairedCards = true;
    this.pairsGuessed++;
    this.pairsMatched.push(firstCard);
  }
  this.pickedCards = [];
  return pairedCards;
}

MemoryGame.prototype.isFinished = function () {
  var isFinish = false;
  if(this.cards.length / 2 === this.pairsGuessed) {
    isFinish = true;
  }
  return isFinish;
};