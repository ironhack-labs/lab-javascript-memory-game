var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let currentIndex = this.cards.length, tmpValue, randomIndex;
  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tmpValue = this.cards[currentIndex];                      //PARTE DIFICIL
    this.cards[currentIndex] = this.cards[randomIndex]
    this.cards[randomIndex] = tmpValue;
  }
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  self = this;
  if (firstCard === secondCard) {
    self.pairsGuessed += 1;
    return true
  } else {
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
 return this.pairsGuessed === this.cards.length / 2
}