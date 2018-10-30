var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {
for(var i=this.cards.length-1;i>=0;i--){
    var j= Math.floor(Math.random()*i);
    var aux=this.cards[i];
    this.cards[i]=this.cards[j];
    this.cards[j]=aux;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  var equals = (firstCard===secondCard);
  this.pairsClicked++;
  (equals? this.pairsGuessed++:0);
  return equals;

}

MemoryGame.prototype.isFinished = function () {
  return (this.cards.length === (this.pairsGuessed*2));
};