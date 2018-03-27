var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {
 
   
    let randomizedDeck = [];
    let array = cardsArr.slice();
    while (array.length !== 0) {
      let rIndex = Math.floor(array.length * Math.random());
      randomizedDeck.push(array[rIndex]);
      array.splice(rIndex, 1)
    }
    return randomizedDeck;
  
  
 
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard == secondCard) {
    this.pairsGuessed +=1;
    return true;}
  else  {
    return false;
  }
};

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed == 12){
    return true;
  }
  else {
 return false;
  } 

};
