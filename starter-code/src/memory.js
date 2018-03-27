var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype._shuffleCard = function (cardsArr) {
  var array = cardsArr;
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  return array;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard === secondCard) {
    pairsGuessed += 1;
    return true;
  } else {
    return false;
  };
};

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === 12) {
    return true
  };
};
