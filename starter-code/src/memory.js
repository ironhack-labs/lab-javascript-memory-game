var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for (let x = 0; x < this.cards.length-1; x++){
    let y = Math.floor(this.cards.length*Math.random());
    let cards = this.cards[x];
    this.cards[x] = this.cards[y];
    this.cards[y] = cards;
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;   
  if (firstCard === secondCard ){
    this.pairsGuessed += 1;
    return true;
  } 
    return false; 
}

MemoryGame.prototype.isFinished = function() {
  if(this.pairsGuessed === this.cards.length/2)
  {
    return true;
  }
    return false;
}