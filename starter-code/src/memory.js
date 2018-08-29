var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0;
  this.pairsGuessed =0;
  //shuffleCards();

};

MemoryGame.prototype.shuffleCards = function () {
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++; 
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  console.log(this.pairsGuessed)
  console.log(this.cards.length/2)
  if(this.pairsGuessed === this.cards.length /2 )
    return true;
  return false;
};