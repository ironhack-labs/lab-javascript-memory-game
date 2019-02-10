var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if (firstCard == secondCard) {
        memoryGame.pairsGuessed++;
    };
    return (firstCard == secondCard);
}

MemoryGame.prototype.isFinished = function () {
    if (memoryGame.pairsGuessed == (memoryGame.cards.length / 2)) {
    };
    return (memoryGame.pairsGuessed == (memoryGame.cards.length / 2));
};

MemoryGame.prototype.shuffleCards = function() {
for(i = 0; i < memoryGame.cards.length; i++) {
    var j = Math.floor(Math.random() * memoryGame.cards.length);
    var k = memoryGame.cards[i];
    memoryGame.cards[i] = memoryGame.cards[j];
    memoryGame.cards[j] = k;
};
};

MemoryGame.prototype.resetGame = function() {
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
}