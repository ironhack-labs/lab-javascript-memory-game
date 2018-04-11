var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr){

  for(var i = cardsArr.length - 1; i >= 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cardsArr[j];
    cardsArr[j] = cardsArr[i];
    cardsArr[i] = temp;
  }
  return cardsArr
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard){
    this.pairsGuessed++
  }
  return firstCard === secondCard
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed < 12){
    return false
  }else{
    return true
  }
};
 