var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.status = true;
};

MemoryGame.prototype.shuffleCards = function () {
  var nrCards = this.cards.length;
  newArray = [];
  if (typeof this.cards !== "array"){
    for (i = 0; i < nrCards; i++) {
      var randomNr = Math.floor(Math.random() * this.cards.length);
      newArray.push(this.cards[randomNr]);
      this.cards.splice(randomNr, 1);
    }
    this.cards = newArray;
    return newArray;
  } else {return undefined}
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard){
    this.pairsGuessed +=1;
    this.pairsClicked +=1;
    return true;
  } else {
    this.pairsClicked +=1;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed < this.cards.length / 2){
    return false;
  }
  else if (this.pairsGuessed = this.cards.length / 2){
    return true;
  }
};