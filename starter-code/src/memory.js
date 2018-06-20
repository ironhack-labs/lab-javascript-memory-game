var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var currentIndex = cardsArr.length;
    var temporaryValue;
    var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardsArr[currentIndex];
    cardsArr[currentIndex] = cardsArr[randomIndex];
    cardsArr[randomIndex] = temporaryValue;
  }

  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    var _this = this;
    if (firstCard === secondCard) {
        _this.pairsClicked += 1;
        _this.pairsGuessed += 1;
        return true;
    } else {
        _this.pairsClicked +=1;
        return false;
    }

}

MemoryGame.prototype.finished = function () {
    var _this = this;
    return _this.PairsGuessed === Object.keys(cards).length;
};
