var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  this.cards.sort(function(a,b) {
    return Math.random() - 0.5;
  });
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  var finish = false;
  if (this.pairsGuessed === parseInt((this.cards.length) / 2)) {
    finish = true;
  }
  return finish;  
};


