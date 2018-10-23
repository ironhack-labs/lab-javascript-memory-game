var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  if(cards!==undefined){
    
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  
return cards;
}else
  return cards;

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked = +1;
  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  } else
    return false;


}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === 12) {
    return false;
  } else
    return true;
};