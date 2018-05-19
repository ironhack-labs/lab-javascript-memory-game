var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for(i=(cardsArr.length -1);i>=0;i--){
    //console.log(cardsArr[i] + "*" +i);
    j = Math.floor(Math.random() * i);
    //console.log(j);
    temp = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = temp;
  }    
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked = this.pairsClicked + 1;
  if(firstCard === secondCard){    
    this.pairsGuessed = this.pairsGuessed + 1;
    return true;
  }else{
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if (this.pairsClicked == 0) return false;

  // if(this.pairsGuessed == (this.cards.length)) {
  if(this.pairsGuessed == 12) {
    return true;
  }else{
    return false;
  }  
};
