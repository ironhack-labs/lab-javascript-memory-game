var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};
MemoryGame.prototype.shuffleCard = function(cardsArr) {
  //The new ES6 allows us to assign two variables at once. This is especially handy when we want to swap the values of two variables,
  //as we can do it in one line of code. Here is a shorter form of the same function, using this feature.
  for (let i = cardsArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]]; // eslint-disable-line no-param-reassign
  }
  return cardsArr;
};
MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  memoryGame.pairsClicked++;
  if (firstCard === secondCard) {
    memoryGame.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};
MemoryGame.prototype.finished = function() {
  if (memoryGame.pairsGuessed === 12) {
    return true;
  } else {
    return false;
  }
};
