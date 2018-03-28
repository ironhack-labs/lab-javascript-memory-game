var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
  var randomCardsArray = [];
  var array = cardsArr.slice();
  while (array.length !== 0) {
    var random = Math.floor(array.length * Math.random());
    randomCardsArray.push(array[random]);
    array.splice(random, 1);
  }
  return randomCardsArray;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard == secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.finished = function() {
  if (this.pairsClicked == 0) {
    return false;
  } else if (this.pairsGuessed === (this.cards.length/2)) {
    return true;
  } else {
    return false;
  }
};
