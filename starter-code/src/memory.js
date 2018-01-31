var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
var numberRandom = Math.floor(Math.random()* cardsArr.length-1)
return cardsArr[numberRandom];
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    
    this.pairsClicked = this.pairsClicked + 1;

    if(firstCard === secondCard) {
        this.pairsGuessed = this.pairsGuessed + 1;
        return true;
        
    } else {
        return false
    }
}

MemoryGame.prototype.finished = function () {
    if (this.cards.length === 0) return false;
    if (this.pairsGuessed === 12) {
        return true;
    } else {
        return false;
    }
};
