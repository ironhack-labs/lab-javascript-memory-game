var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCards = function() {};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard.name === secondCard.name) {
    this.pairsGuessed++;
    this.pickedCards = [];
    return true;
  } else {
    setTimeout(function() {
      firstCard.reference.toggleClass("back front");
      firstCard.reference2.toggleClass("back front");
      secondCard.reference.toggleClass("back front");
      secondCard.reference2.toggleClass("back front");
      return false;
    }, 1000);
    this.pickedCards = [];
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === this.cards.length / 2) {
    alert("You won! Your score is" + this.pairsClicked);
    return true;
  } else {
    return false;
  }
};
