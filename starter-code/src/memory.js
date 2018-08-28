var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCards = function () {
  var shuffle = function (cards) {
    var randomizedDeck = [];
    var array = cards.slice();
    while (array.length !== 0) {
      var rIndex = Math.floor(array.length * Math.random());
      randomizedDeck.push(array[rIndex]);
      array.splice(rIndex, 1);
    }
    return randomizedDeck;
  };
  this.cards = shuffle(this.cards);
  return undefined;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false;
  }
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2) {
  return true;
  } else {
  return false;
  }
};

