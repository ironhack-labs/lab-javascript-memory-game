var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
  this.selectedCard=null;
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
  if (equals) this.pairsGuessed++;
  return equals;

}

MemoryGame.prototype.isFinished = function () {
  return (this.cards.length === (this.pairsGuessed*2));
};

MemoryGame.prototype.clickCard=function (card){
  this.pickedCards.push(card);
}


MemoryGame.prototype.isSecondCard=function(){
  return (this.pickedCards.length==2);
}

MemoryGame.prototype.isAMatch=function(){
  var match= this.checkIfPair(this.pickedCards[0],this.pickedCards[1]);
  this.pickedCards=[];
  return match;
}

MemoryGame.prototype.getPairsClicked= function(){
  return this.pairsClicked;
}

MemoryGame.prototype.getPairsGuessed= function(){
  return this.pairsGuessed;
}