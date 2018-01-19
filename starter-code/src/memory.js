var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.isMatch = false;
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
    this.pairsClicked++;
    if (firstCard === secondCard) {
        this.pairsGuessed++;
        this.isMatch = true;
        return true;
    } else {
        return false;
    }
}

MemoryGame.prototype.finished = function () {
    var numberOfPairs = this.cards.length / 2;
    if (this.pairsClicked == 0) {
        return false
    }
    else if (this.pairsGuessed === numberOfPairs) {
        return true;
    } else {
        return false;
    }
};

