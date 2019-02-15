var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

};

MemoryGame.prototype.shuffleCards = function () {
  for (i=0; i < this.cards.length; i++) {
    var shuffle = Math.floor(Math.random() * (this.cards.length)) 
    this.cards[i] = shuffle;
    }
  }

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard == secondCard) {
    this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  } else {
    this.pairsClicked++;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  var pairs = this.cards.length / 2;
  if (this.pairsGuessed == pairs) {
    return true;
  } else {
    return false;
  }
};