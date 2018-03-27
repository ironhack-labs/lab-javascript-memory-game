var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  const shuffle = (cardsArr) => {
    let randomizedDeck = [];
    let array = cardsArr.slice();
    while (array.length !== 0) {
      let rIndex = Math.floor(array.length * Math.random());
      randomizedDeck.push(array[rIndex]);
      array.splice(rIndex, 1)
    }
    return randomizedDeck;
  };
  return (shuffle(cardsArr));
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    this.pickedCards = [];
    return true;
  } else {
    this.pickedCards = [];
    return false;
  }
}

MemoryGame.prototype.finished = function () {
  if (this.pairsGuessed === cards.length/2) {
    return true;
  } else {
    return false;
  }
};