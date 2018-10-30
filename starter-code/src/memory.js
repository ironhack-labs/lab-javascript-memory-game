var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {
    var arrayLength =this.cards.length
    for(var i=arrayLength-1; i>=0; i--){
       var randNumer =  Math.floor(Math.random()*(arrayLength-0+1)+0);
       this.cards[randNumer] = this.cards[i];
    }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      this.pairsClicked+=1
      if (firstCard===secondCard){
        this.pairsGuessed+=1
        return true;
      }else{
        return false;
      }

}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed===(this.cards.length/2)){
    return true;
  }else{
    return false;
  }
};