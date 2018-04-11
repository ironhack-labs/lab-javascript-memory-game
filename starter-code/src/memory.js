var MemoryGame = function(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCard = function(cardsArr) {
    for (var i = 0; i < cardsArr.length; i++) {
        var b = Math.random();
        var bis = cardsArr[i];
        cardsArr[i] = cardsArr[b];
        cardsArr[b] = cardsArr[i];
    }
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
        this.pairsGuessed++;
        return true;
    }
    return false;
}

MemoryGame.prototype.finished = function() {
    if (this.pairsGuessed === 12) {
        return true;
    } else if (this.pairsGuessed < 12) {
        return false;
    }
};