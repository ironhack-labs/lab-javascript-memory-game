var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.previousCard = '';
  this.status = true;
};

MemoryGame.prototype.shuffleCards = function () {
  // later, bonus
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  console.log("check pair called!")
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 12) {
    alert("hoorah you won!");
    return true;
  } else {
    return false;
  }
};