var MemoryGame = function (cards) {
  this.cards = cards;
  var pickedCards = [0];
  var pairsClicked = 0;
  var pairsGuessed = 0;
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairsGuessed = pairsGuessed;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards = cards;
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    
}
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};