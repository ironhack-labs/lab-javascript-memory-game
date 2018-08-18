var MemoryGame = function (cards) {
  this.cards = cards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.pickedCards = [];
};

MemoryGame.prototype.shuffleCards = function () {
  let cardsNumber = this.cards.length;
  let newCards = [];
  for(i=0; i< cardsNumber; i++){
    newCards.push(this.cards.splice(Math.floor(Math.random()*this.cards.length),1)[0]);
  }
  this.cards = newCards;
  return;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  if ( this.pairsGuessed < this.cards.length/2){
    return false;    
  }
  return true;
};