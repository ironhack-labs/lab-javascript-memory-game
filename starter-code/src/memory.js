var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed= 0;
}

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  
  //Math.floor(Math.random()*cardsArr.length-1)+1

  var newArray = []

  for(i=0 ; i<array.length; i++){
    newArray.push(Math.floor(Math.random()*array.length-1)+1);
    
  }
  
  return newArray;
  

  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked+1;
  
  if (firstCard==secondCard){
    this.pairsClicked+1;
    return true;
  } else {
    return false;
  }

}

MemoryGame.prototype.finished = function () {
  if(this.pairsGuessed = cards/2){
    return true;
  }
};
