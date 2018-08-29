  
  this.guessed = 0
  this.clicked = 0

var MemoryGame = function (cards) {
  this.cards = cards;
  this.guessed = 0
  this.clicked = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var i = this.cards.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this.cards[i];
     this.cards[i] = this.cards[j];
     this.cards[j] = temp;
  }
  return this;

}

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