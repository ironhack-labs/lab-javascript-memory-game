var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = new Array(2).fill("");
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length;
  var t;
  var i;
  while (m) {
    i = Math.floor(Math.random()*m--);
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i]=t;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard === secondCard) {
    this.pairsGuessed ++;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed===this.cards.length/2) {
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    return true;
  } else {
    return false;
  }
};