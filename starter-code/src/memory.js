var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  
};

MemoryGame.prototype.shuffleCards = function () {
  for(var i = this.cards.length-1 ; i > 0; i--){
    var x = Math.floor(Math.random()* i);
    a = this.cards[i];
    this.cards[i] = this.cards[x]
    this.cards[x] = a;
  }
};

  

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard == secondCard){
    this.pairsGuessed ++; 
    return true;
     
  }else {
    return false;
  }
}


MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === this.cards.length/2;
  
};