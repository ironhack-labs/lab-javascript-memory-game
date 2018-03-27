 var MemoryGame = function (cards) {
  this.cards = cards                                                 //this.shuffleCard(cards);
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  for (var i = 0; i < cardsArr.length; i++) {
    var j = Math.floor(Math.random()*cardsArr.length);
    var k = cardsArr[i];
    cardsArr[i] = cardsArr[j];
    cardsArr[j] = k;    
  }
  return cardsArr;

};



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return isPair = true;
  }
  return isPair = false;

}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed == 0){
    return isFinished = fase;
  }
  if (this.pairsGuessed == this.cards.length/2) {
    return isFInished = true;
  }
  return isFinished = false;
};
