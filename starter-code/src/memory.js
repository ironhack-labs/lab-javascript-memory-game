var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards  = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.cards = this.shuffleCard(cards);
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var counter = cardsArr.length;
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = cardsArr[counter];
    cardsArr[counter] = cardsArr[index];
    cardsArr[index] = temp;
  }
  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    memoryGame.pairsGuessed++;
  }
  return firstCard === secondCard;
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === 12;
};