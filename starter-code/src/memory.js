var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var myPseudoLength = this.cards.length;

  for (var i = this.cards.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random() * (i+1));

    var swappy = this.cards[randomIndex];
    this.cards[randomIndex] = this.cards[myPseudoLength - 1];
    this.cards[myPseudoLength - 1] = swappy;
    myPseudoLength--;
  }
  return undefined;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked +=1;
  if (firstCard === secondCard) {
    this.pairsGuessed+=1;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed===this.cards.length/2) {
    return true;
  } else {
    return false;
  }
};
