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
  this.pickedCards[0] = firstCard;
  this.pickedCards[1] = secondCard;
  this.pairsClicked++;
  if(this.pickedCards[0] == this.pickedCards[1]){
    this.pairsGuessed++;
    return true;
  }
  else {
    return false;
  }

}

MemoryGame.prototype.isFinished = function () {
this.cards = cards;
  if(this.pairsGuessed == (this.cards.length)/2){
    return true;
  }
    else {
      return false;
    }
  
};