var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  //this.cards.sort(function() { return 0.5 - Math.random() });
  //console.log(this.cards);
  for (i = 0; i < this.cards.length; i++) { 
    var cardMixed = Math.floor(Math.random() * (this.cards.length -i));
    this.cards[i] = this.cards[cardMixed];
  }
};

  


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked = this.pairsClicked +1
  if(firstCard == secondCard){
    this.pairsGuessed = this.pairsGuessed + 1;
    return true;
  }
  else {
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
};