var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 1;
  this.pairsGuessed = 1;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
 var currentIndex = cardsArr.length, temporaryValue, randomIndex;

 while (0 !== currentIndex) {
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1

    temporaryValue = cardsArr[currentIndex];
    cardsArr[currentIndex] = cardsArr [randomIndex];
    cardsArr[randomIndex] = temporaryValue
 }
 return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if (firstCard === secondCard) {
        this.pairsClicked += 1;
        this.pairsGuessed += 1;
        return true;
    } else {
        this.pairsClicked += 1;
        return false;
    }

}

MemoryGame.prototype.finished = function () {
    this.numberOfPairs = this.pickedCards.length / 2;
    if (this.pairsGuessed == this.numberOfPairs) {
        return true;
    } else {
        return false;
    }
};

