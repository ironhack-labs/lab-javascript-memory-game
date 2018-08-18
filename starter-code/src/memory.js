var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = {};
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  let newDeck = this.cards;

  for (let i = newDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = newDeck[i];
    newDeck[i] = newDeck[j];
    newDeck[j] = x;
  }
  //console.log(newDeck);

  return newDeck;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  if (firstCard && secondCard) {
    this.pairsClicked += 1;
    if (firstCard == secondCard) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  }
  return false;
};
