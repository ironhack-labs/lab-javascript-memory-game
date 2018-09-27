var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
    var j, x, i;
    var a = this.cards;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  updateTryCount();
  if(firstCard !== undefined && secondCard !== undefined && firstCard === secondCard) {
    console.log("good one!");
    updateGuessCount();
    return true;
  }
  console.log("not this time :(");
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if(memoryGame.pairsGuessed !== pairsToGuess) {
    return false;
  } else if (memoryGame.pairsGuessed === pairsToGuess) {
    return true;
  }
};