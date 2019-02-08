var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

// MemoryGame.prototype.shuffleCards = function () {
// };

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if (firstCard == secondCard) {
        memoryGame.pairsGuessed++;
    };
    return (firstCard == secondCard);
}

MemoryGame.prototype.isFinished = function () {
    if (memoryGame.pairsGuessed == (memoryGame.cards.length / 2)) {
        alert("congrats! You've won!");
    };
};