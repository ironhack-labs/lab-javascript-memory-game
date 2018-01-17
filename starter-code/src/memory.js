var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};



MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for (var i=0; i<cardsArr.length;i++){
    var  j = Math.random() ;
    var bis=cardsArr[i];
    cardsArr[i]=cardsArr[j];
    cardsArr[j]=cardsArr[i];
  }
  return cardsArr
  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard===secondCard){
    this.pairsGuessed++;
  }
  return (firstCard===secondCard)
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed  === 12){
    return true 
  }
  else {
    return false
  }
  
};
