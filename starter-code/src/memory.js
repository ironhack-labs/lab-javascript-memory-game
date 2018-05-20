var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {    
  var randPos = 0
  var tempCard = null

  for (var i = cardsArr.length - 1; i > 0; i--) {
    randPos = Math.floor(Math.random() * (i + 1))
    tempCard = cardsArr[i];
    cardsArr[i] = cardsArr[randPos];
    cardsArr[randPos] = tempCard;
  }

  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  firstCard == secondCard ? this.pairsGuessed++ : 0;
  return firstCard == secondCard;
}

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed === cards.length / 2 ? true : false;
};