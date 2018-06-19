
var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var currentIndex = cardsArr.length, temporaryValue, randomIndex;
    
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
    this.pairsClicked++;
    if(firstCard == secondCard){this.pairsGuessed++;}
    return firstCard == secondCard;
}

MemoryGame.prototype.finished = function () {
    return this.pairsGuessed == 12;
};
