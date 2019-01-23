var MemoryGame = function (cards,pickedCards,pairsClicked, pairsGuessed) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0


};

MemoryGame.prototype.shuffleCards = function (cards) {
this.pickedCards = cards

cards.sort(() => Math.random() - 0.5);
};




MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

this.pairsClicked=+ 1;

if(firstCard === secondCard){
this.pairsClicked+= 1
this.pairsGuessed+= 1
  return true
} else {

  return false
}
};  

MemoryGame.prototype.isFinished = function () {

if(this.pairsGuessed != 12){

    return false 
  } else if(this.pairsGuessed === 12){
      return true
  } else{
    return false
  }

};