'use strict';

var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var m = cardsArr.length,
        t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = cardsArr[m];
        cardsArr[m] = cardsArr[i];
        cardsArr[i] = t;
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
    if (this.pairsGuessed === 12) {
        return true;
    }
    else {
        return false;
    }
};