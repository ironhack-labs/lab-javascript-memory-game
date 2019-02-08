var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var shuffled = [];
  var arrayLength = this.cards.length
  for(var i = 0; i< arrayLength; i++) {
    shuffled.push(this.cards.splice(Math.floor(Math.random() * this.cards.length),1)[0]);
  } this.cards = shuffled;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      this.pairsClicked += 1;
    if(firstCard === secondCard) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
};

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed == 12) {
    return true;
  } else {
    return false;
  }
};