var MemoryGame = function (cards) {
   this.cards = cards;
   this.pickedCards = [];
   this.pairsClicked = 0;
   this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    for (let i = cardsArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]];
    }
    return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked++;
    return (firstCard == secondCard) ? (this.pairsGuessed++ , true) : false;
}

MemoryGame.prototype.finished = function () {
    return (this.cards.length==0) ? false :
    ((this.pairsGuessed == 12) ? true : false);
};