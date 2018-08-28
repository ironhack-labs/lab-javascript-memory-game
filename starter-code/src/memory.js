var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  // https://stackoverflow.com/questions/19913537/randomize-an-array-of-team-names-and-return-n-number-of-teams
  for (var i = this.cards.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * i);
    var temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  // add 1 to pairs clicked when checkifPair executes
  this.pairsClicked = this.pairsClicked + 1
  //if theyre the same..
  if (firstCard == secondCard) {
    this.pairsGuessed = this.pairsGuessed + 1;
    this.pickedCards = [];
    return true;
  } else {
    this.pickedCards = [];
    return false;

  }
}

MemoryGame.prototype.isFinished = function () {
  // var delayedFinish = setTimeout(function() {
  //   if (this.pairsGuessed == 12) {
  //     window.alert("Congratulations! YOU WIN!")
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }, 2000)
  if (this.pairsGuessed == 12) {
    //window.alert("CONGRATULATIONS!");
    return true;
  } else {
    return false;
  }
};