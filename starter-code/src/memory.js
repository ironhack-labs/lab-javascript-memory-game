var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  var carsdRandom = [];
  for (var i = this.cards.length; i > 0; i--) {
    var card = Math.floor(Math.random() * i);
    cardOut = this.cards.splice(card, 1);
    carsdRandom.push(cardOut);
  }
  this.cards = carsdRandom;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  }
  return false;
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  }
  return false;
};
