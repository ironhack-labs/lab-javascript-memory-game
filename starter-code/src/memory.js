
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return this.cards;
}


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked += 1;

  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true
  }else {
    
    return false
  }

}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed !== 12) {
    return false
  }
  else return true
};