var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=[];
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    console.log(cardsArr.length);
    for(i=0; i < cardsArr.length; i++){
      var j = (Math.floor(Math.random() * cardsArr.length));
     var temp= cardsArr[i];
     cardsArr[i]=cardsArr[j];
     cardsArr[j]=temp;
    }
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  
 if (firstCard === secondCard){
    this.pairsGuessed += 1  
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.finished = function () {
    
    if (this.pairsGuessed ===12){
      return true;
    }
    else {
      return false;
    }
};
