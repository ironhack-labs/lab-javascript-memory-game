var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [""];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {
    const shuffle = (deck) => {
        let cardsArr = [];
        let array = deck.slice();
        while (array.length !== 0) {
            let rIndex = Math.floor(array.length * Math.random());
            cardsArr.push(array[rIndex]);
            array.splice(rIndex, 1)
        }
        return cardsArr;
    };
    return shuffle(cardsArr);
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
    if (this.pairsClicked === 0) {
        return false
    } else if (this.pairsGuessed === 12) {
        return true;
    } else {
        return false;
    }
};
