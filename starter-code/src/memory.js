var MemoryGame = function(cards) {
  this.cards = cards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.pickedCards = [];
};

MemoryGame.prototype.shuffleCards = function() {
  var array = this.cards.length;
  while (array) {
    var i = Math.floor(Math.random() * array--);
    var t = this.cards[array];
    this.cards[array] = this.cards[i];
    this.cards[i] = t;
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed  == this.cards.length/2) {
    return true;
  } else {
    return false;
  }
};
