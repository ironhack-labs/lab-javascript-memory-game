var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards=[];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.shuffleCards();
};

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length
  var t,i
  while (m){
    i = Math.floor(Math.random()*m--)
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if(firstCard === secondCard){
    this.pairsGuessed++
    return true
  }
  return false
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === this.cards.length/2;
};

MemoryGame.prototype.reset = function(){
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.pickedCards = [];
  this.shuffleCards();
}