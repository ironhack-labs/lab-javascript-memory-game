var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {
  let cardTemp;
  let j;
  for(let i=this.cards.length-1; i>0; i--){
    j=Math.floor(Math.random()*(i+1));
    cardTemp=this.cards[i];
    this.cards[i]=this.cards[j];
    this.cards[j]=cardTemp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked=this.pairsClicked+1;
  if(firstCard===secondCard){
    this.pairsGuessed++;
    return true;
  }
  else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed===this.cards.length/2)
    return true;
  else
    return false;
};
