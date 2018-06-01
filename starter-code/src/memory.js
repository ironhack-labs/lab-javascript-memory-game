var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var newArr = cardsArr;

  for (i = 0; i < newArr.length; i++) {
    var randNumber = Math.floor(Math.random() * i);
    var temp = newArr[i];

    newArr[i] = newArr[randNumber];
    newArr[randNumber] = temp;
  }
  return newArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard === secondCard) {
    this.pairsGuessed++
    return true;
  }
  return false;
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === (this.cards.length / 2)) {
    return true;
  }
  return false;
};
