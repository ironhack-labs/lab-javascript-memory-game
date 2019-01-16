var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

};
 MemoryGame



MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

     newCards = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = newCards;
  }
}
 
    


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
    if(firstCard === secondCard) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
}

MemoryGame.prototype.isFinished = function () {
}

