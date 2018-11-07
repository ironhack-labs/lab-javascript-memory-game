var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards= [];
  this.pairsClicked= 0;
  this.pairsGuessed= 0;
  
};

MemoryGame.prototype.shuffleCards = function (cards) {
  for(var i = 0; i < cards.length; i++){
    cards[i] =  Math.floor(Math.random() * cards.length);
}
 return cards;  
};




MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (this.pickedCards.length === 2 && firstCard === secondCard){
    return "Good job"
    this.pairsGuessed +=1

  } else {
    return "Try again"
    this.pairsClicked +=1
  }
}

MemoryGame.prototype.isFinished = function () {
  return (this.pairsGuessed === 12)
};

