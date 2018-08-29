var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;
  
  while (0 !== currentIndex) {
  
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  
  temporaryValue = this.cards[currentIndex];
  this.cards[currentIndex] = cards[randomIndex];
  this.cards[randomIndex] = temporaryValue;  
}

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++;

  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
  
}

MemoryGame.prototype.isFinished = function () {

  if (this.cards.length / 2 === this.pairsGuessed) {
    return true;
  } else {
    return false;
  }
};