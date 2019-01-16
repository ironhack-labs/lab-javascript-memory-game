var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  for (let i = this.cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * i);
    let temp = this.cards[i]
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  let pairs = this.cards.length / 2;
  if (this.pairsGuessed === pairs) {
    return true;
  } else {
    return false;
  }
};