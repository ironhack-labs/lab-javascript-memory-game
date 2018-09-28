var pickedCards = [];
var cards = [];

var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = pickedCards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

var firstCard = pickedCards[0];
var secondCard = pickedCards[1];

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  return;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked +=1;
  this.firstCard = firstCard;
  this.secondCard = secondCard;
  if (this.firstCard === this.secondCard) {
    this.pairsGuessed +=1;
    return true;
  }
  else {
    return false;
  };
};

MemoryGame.prototype.isFinished = function () {
  if (this.cards.length/2 == this.pairsGuessed) {
    return true;
  }
  else {
    return false;
  };
};