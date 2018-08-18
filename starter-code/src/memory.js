var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function(cards) {
  var newArrayOfCards = [];
  var fixedLength = cards.length; 
  for (i=0; i<fixedLength; i++){
    var chooseRandomCard = Math.floor(Math.random()*(cards.length));
    
    newArrayOfCards.push(cards[chooseRandomCard]);
    
    cards.splice(chooseRandomCard, 1);
    }
    return newArrayOfCards;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard){
    this.pairsGuessed++;
    return true;
  } else {
    return false; 
  }

}

MemoryGame.prototype.isFinished = function () {
  let pairs = this.cards.length/2;
  if (this.pairsGuessed < pairs ){
    return false;
  } else {
    return true;
  }
};