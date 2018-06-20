var MemoryGame = function (allCards) {
    this.cards = allCards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.currentPair = [];
};


MemoryGame.prototype._shuffleCard = function () {
    var _shuffledArray = [];

    while (_shuffledArray.length < 24) {
        var randNum = Math.floor(Math.random() * this.cards.length);
        var randElement = this.cards[randNum];
        _shuffledArray.push(randElement);
        this.cards.splice(randNum, 1);
    }

    this.cards = _shuffledArray;
    
};
    
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

    this.pairsClicked++;
    if (firstCard.attr("name") === secondCard.attr("name")) {
        this.pairsGuessed++;
        return true;
    }
    return false;
};
    

MemoryGame.prototype.finished = function () {
    return this.pairsGuessed >= 12;
}