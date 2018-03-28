function MemoryGame(cards) {
  this.pickedCards = [];
  this.cards = cards;
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

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
  if (firstCard === secondCard) {
    this.pairsClicked++;
    this.pairsGuessed++;
    return true;
  } else {
    this.pairsClicked++;
    return false;
  }
};

MemoryGame.prototype.finished = function() {
  if (this.cards.length == 0) {
    return false;
  } else if (this.pairsGuessed == ((this.cards.length)/2)) {
    return true;
  } else {
    return false;
  }
};
