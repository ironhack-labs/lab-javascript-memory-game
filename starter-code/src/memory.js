var MemoryGame = function(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = [];
    this.pairsClicked = []


};

MemoryGame.prototype.shuffleCards = function() {
    this.cards.forEach(function(card) {
        card1 = cards[i].Math.random();

    })
};



MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
    this.pairsClicked.push([firstCard, secondCard]);
    this.pickedCards = [];
    if (firstCard.name === secondCard.name) {
        this.pairsGuessed.push([firstCard, secondCard]);
        return true;
    } else {
        return false;
    }
};



MemoryGame.prototype.isFinished = function() {
    if (this.pairsGuessed.length === this.cards.length) {
        return true;
    } else {
        return false;
    }

}