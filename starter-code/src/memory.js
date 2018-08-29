function MemoryGame(cards){
  this.cards = cards
  this.guessed = 0
  this.clicked = 0
}

var MemoryGame = function (cards) {
  this.cards = cards;
  
};

MemoryGame.prototype.shuffleCards = function () {

};
var guessed=0;
var clicked=0;
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  clicked++;
  this.clicked=clicked;
  $('#pairs_clicked').text(clicked);
  if(firstCard === secondCard){
    guessed++;
    $('#pairs_guessed').text(guessed)
    this.guessed=guessed;
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  var self = this.guessed 
  if(self == 12){
    return true;
  }
  return false;
};