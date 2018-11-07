var MemoryGame = function (cards) {
  this.newCards =[];
  this.cards = cards;
  this.pairsGuessed = 0;
  this.pairsClicked = 0; 
};

MemoryGame.prototype.shuffleCards = function () {
  var copy = [], n = this.cards.length, i;

  while (n) {
    i = Math.floor(Math.random() * n--);

    copy.push(this.cards.splice(i, 1)[0]);
  }
  console.log(copy)
  return copy;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
   if(firstCard === secondCard){
     this.pairsClicked++;
     return false;
   }else{
     this.pairsClicked++;
     this.pairsGuessed++;
     return true;
   }
}

MemoryGame.prototype.isFinished = function () {
  if (this.cards.length/2 === this.pairsGuessed){
    return true
  }else{
    return false
  }
};