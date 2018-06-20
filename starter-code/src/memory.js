var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = Number([]);
  this.pairsGuessed = Number([]);
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var result = [];
  result.length = cardsArr.length;
  var currentIndex = 0, randomIndex = Math.floor(Math.random() * cardsArr.length);
  while(currentIndex < cardsArr.length) {
    if(result[randomIndex] === undefined) {
      result[randomIndex] = cardsArr[currentIndex];
      currentIndex++;
    }
    randomIndex = Math.floor(Math.random() * cardsArr.length)
  }
  return result;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if(firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.finished = function () {
  return this.pairsGuessed === cards.length / 2;
}; 