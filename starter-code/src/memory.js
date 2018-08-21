var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  for(var i = 0; i < this.cards.length-2; i ++){
    var random = Math.floor(Math.random() * this.cards.length);
    this.cards[i] = this.cards[random];
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  var isPair = false;
  if(firstCard === secondCard){
    this.pairsGuessed += 1;
    isPair = true;
  }
  return isPair;
  
}

MemoryGame.prototype.isFinished = function () {
  var finished = false;
  if(this.pairsGuessed === (this.cards.length/2) ){
    finished = true;
  }  
  return finished;
};