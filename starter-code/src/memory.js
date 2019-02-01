var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards = cards;
    var currentIndex = this.cards.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  console.log(firstCard, secondCard)
  if (firstCard == secondCard) {
    this.pairsGuessed ++;
    this.pairsClicked ++;
    return true;
  }
  else {
    this.pairsClicked ++;
    return false;
  }
  
}

MemoryGame.prototype.isFinished = function () {
  console.log(this)
  if(this.pairsGuessed >= (8)) {
    return true;
  }
  else {
    return false;
  }
};