var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {
  var that=this;
  for (var i=that.cards.length-1;i>0;i--){
    for (var j=that.cards.length-1;j>0;j--){
      var randomSet=Math.floor(Math.random()*(i+1));
      currentVal =that.cards[i];
      that.cards[i]=that.cards[j];
      that.cards[j]=currentVal;
    }

  }
  return undefined;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard===secondCard){
   // this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  } else{
    this.pairsClicked++;
    firstCard=children().toggleClass("front").toggleClass("back");
    secondCard=children().toggleClass("front").toggleClass("back");

    return false;
  }

}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed===(this.cards.length)/2){
    return true;
  } else {
    return false;
  }
};