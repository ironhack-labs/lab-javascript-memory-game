var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;

};

MemoryGame.prototype.shuffleCards = function (cards) {
    var array=[];
    while(this.cards.length>0){
      var randomNumber=Math.floor(Math.random()*(cards.length));
      array.push(cards.splice(randomNumber,1));
    }
    this.cards=array;
  }


  

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard===secondCard){
    this.pairsGuessed++;
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed==this.cards.length/2){
    setTimeout(function(){
      alert("You won!!!");
    },500);
  };
};