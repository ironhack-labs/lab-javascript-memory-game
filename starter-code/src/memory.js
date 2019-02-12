var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

MemoryGame.prototype.shuffleCards = function () {
  var stackOfCards = this.cards
  var stackLength = stackOfCards.length;
  var temporal;
  var randomPick;
  
  while(stackLength){
    randomPick = Math.floor(Math.random() * stackLength--)

    temporal = stackOfCards[stackLength]
    stackOfCards[stackLength] = stackOfCards[randomPick]
    stackOfCards[randomPick] = temporal
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if(firstCard === secondCard){
    this.pairsGuessed++
  }
  return firstCard === secondCard
}

MemoryGame.prototype.isFinished = function () {
  
  if (this.pairsGuessed===this.cards.length/2){
    return true
  }
  return false;
};

