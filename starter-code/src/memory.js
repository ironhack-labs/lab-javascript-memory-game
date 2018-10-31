var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards =[];
  this.pairsClicked=0;
  this.pairsGuessed=0;
  
};

MemoryGame.prototype.shuffleCards = function () {
  var shuffle1=cards.filter(function(card) {
    return card.img
  })
  var shuffle2=cards.filter(function(card) {
    return card.img
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard===secondCard){
    this.pairsClicked++;
    this.pairsGuessed++;
  }else{
    this.pairsGuessed++;
  }
}

MemoryGame.prototype.isFinished = function () {
};