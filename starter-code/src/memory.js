var MemoryGame = function(cards) {
  this.cards = cards;
};

MemoryGame.prototype.shuffleCards = function() {
  for (let i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard=== secondCard){
    this.pairsGuessed++;
    return true;
  }else{
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if(this.pairsGuessed === this.cards.length/2){
    return true;
  }
  else{
    return false;
  }
};

MemoryGame.prototype.pickedCards = [];

MemoryGame.prototype.pairsClicked = 0;

MemoryGame.prototype.pairsGuessed = 0;
