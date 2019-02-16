var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {


if(firstCard.attr("add-class-name")==secondCard.attr("add-class-name")){

  this.pairsGuessed=1;

}else{


this.pairsGuessed=0;
}

}

MemoryGame.prototype.isFinished = function () {
};