var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
}
MemoryGame.prototype.shuffleCard = function shuffle(arrCards) {
    var shuffling = [],
        n = arrCards.length,
        i;

    // While there remain elements to shuffle…
    while (n) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * arrCards.length);

        // If not already shuffled, move it to the new array.
        if (i in arrCards) {
            shuffling.push(arrCards[i]);
            delete arrCards[i];
            n--;
        }
    }

    return shuffling;
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked += 1;

    if (firstCard === secondCard) {
        this.pairsGuessed += 1;
        return true;
    } else {
        return false;
    };

};

MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed == 12) {
        return true;
    } else {
        return false;
    };

};