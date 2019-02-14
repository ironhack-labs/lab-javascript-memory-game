var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;


};

MemoryGame.prototype.shuffleCards = function (){
  
  if(!cards.length == 0){
    for (i = 0; i < this.cards.length; i++) {
      var j = Math.floor(Math.random() * (this.cards.length - i)) + 0
      this.cards[i] = this.cards[j];
    }
  }else{
    return undefined;
  }
};
 
//problemas de scope al añadir this.Guessed++;
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard){
    this.pairsGuessed++;
    return true;
  }else{
    return false;
  }
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 3){
    return true;
  }else{
    return false;
  }
};