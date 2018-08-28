var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for (var i = this.cards.length -1; i > 0; i--) {
    var j = Math.floor(Math.random() * i);
    var tmp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j]= tmp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
if (firstCard === secondCard){
    this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  } else {
    this.pairsClicked++;
    return false;
}
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == (this.cards.lenght/2)) {
    return true;
  } else {
    return false;
  }
};