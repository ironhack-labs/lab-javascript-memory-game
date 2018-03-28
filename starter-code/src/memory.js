var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.cards = this.shuffleCard(cards);
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var cartasL = cardsArr.length;
    while (cartasL > 0) {
        todas = Math.floor(Math.random() * cartasL);
        cartasL--;
        j = cardsArr[cartasL];
        cardsArr[cartasL] = cardsArr[todas];
        cardsArr[todas] = j;
    }
    return cardsArr;
};
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
        memoryGame.pairsGuessed++;
    }
    return firstCard === secondCard;
}
MemoryGame.prototype.finished = function () {
if(pairsGuessed===cards)
return true
};
