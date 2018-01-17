var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;


};


MemoryGame.prototype.shuffleCard = function (cardsArr) {

    var copy = [], n = this.cards.length, i;

    // While there remain elements to shuffle…
    while (n) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * n--);

        // And move it to the new array.
        copy.push(this.cards.splice(i, 1)[0]);
    }

    return copy;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;
    if (firstCard == secondCard) {
        this.pairsGuessed += 1;
        return true;
    } else {
        return false;
    }


};

MemoryGame.prototype.finished = function () {

    if (this.pairsGuessed == 12) {
        return true;
    }
    else {
        return false;
    }
}
