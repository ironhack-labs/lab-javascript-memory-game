var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  let counter = this.cards.length;
  while (counter > 0) {
    let i = Math.floor(Math.random() * counter);
    counter--;
    let temp = this.cards[counter];
    this.cards[counter] = this.cards[i];
    this.cards[i] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) this.pairsGuessed++;
  return firstCard === secondCard;
};

MemoryGame.prototype.isFinished = function() {
  return (this.pairsGuessed === this.cards.length/2)
};
