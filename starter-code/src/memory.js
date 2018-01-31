var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var firstArray = cardsArr;
  var mixArray = firstArray.length
  var nexIndex, j ;
  
  while (mixArray > 0){
    nexIndex = Math.floor(Math.random() * mixArray);
     mixArray --;
     
     j = cardsArr[mixArray];
     cardsArr[mixArray] = cardsArr[nexIndex];
     cardsArr[nexIndex] = j;
  } 
   return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if(firstCard===secondCard){
    this.pairsGuessed ++;
    return true;
  }else{
    return false;
  } 
} 

MemoryGame.prototype.finished = function () {
  var totalCards = cards.length / 2;
  if(this.pairsGuessed === totalCards){
    return true;
  }else{
    return false;
  }
};
