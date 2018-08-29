var MemoryGame = function (cards) {
  this.cards = this.shuffleCards(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cardsArr) {

  for (let i = cardsArr.length - 1; i > 0; i--) {
      
      var j = Math.floor(Math.random()*(i + 1))
      var temporal = cardsArr[i]
      cardsArr[i] = cardsArr[j]
      cardsArr[j] = temporal 
  }

  return cardsArr

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++
  if (firstCard == secondCard) {
    this.pairsGuessed++
    return true
  }else{
    return false
  }

}

MemoryGame.prototype.isFinished = function () {

  if (this.pairsGuessed == cards.length/2) {
    return true
  }else{
    return false
  }

};