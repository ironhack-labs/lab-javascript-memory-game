var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed =0;
};

MemoryGame.prototype.shuffleCards = function () {
  for (let i=0;i<cards.length;i+=1){
    let shuf = Math.floor(Math.random()*cards.length);
    //this.cards[i]=cards[shuf];
    this.cards.splice(shuf,0,cards[i]);
    this.cards.splice(i,1);
  }
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked+=1;
    if(firstCard==secondCard){
      this.pairsGuessed+=1;
      return true;
    }
  return false;   
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === cards.length/3){
    return true;
  }
  return false;
};