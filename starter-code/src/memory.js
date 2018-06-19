var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  return _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked = this.pairsClicked + 1;

  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed == 12) {
    return true;
  } else {
    return false;
  }
};
