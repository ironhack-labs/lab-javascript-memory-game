var MemoryGame = function () {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.shuffleCards();
}
MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length,
    tempValue, randomIndex;
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex--);
    tempValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = tempValue;
  }
};
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};
MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 12) {
    return true;
  } else {
    return false;
  }
};