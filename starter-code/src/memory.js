var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = cards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var randomNumber = Math.floor(Math.random()* cardsArr.length -1);

return cardsArr[randomNumber];

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
if (firstCard === secondCard) {
  this.pairsGuessed++;
  return true;
  
} else {
  return false;
  
  }  
}

MemoryGame.prototype.finished = function () {
if (this.pairsGuessed === 12) {
  return true;
} else {
  return false;
  
}

};
