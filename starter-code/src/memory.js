var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var cardsArray = [];
  var cardsTotal = cardsArr.length;
  var cardTemp;

  cardsArray = cards.slice(0);

  //implementation of the Fisher-Yates algorithm
  for (var iterator = cardsTotal; iterator > 0; iterator--) {
    randomCard = Math.floor(Math.random() * iterator);
    cardTemp = cardsArray[randomCard];
    cardsArray[randomCard] = cardsArray[iterator];
    cardsArray[iterator] = cardTemp;
  }
  return cardsArray;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked += 1;

  if (firstCard === secondCard) {
    this.pairsGuessed += 1;
    return true;
  } else {
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  return (this.pairsGuessed === (this.cards.length / 2) && this.pairsGuessed > 0);
}