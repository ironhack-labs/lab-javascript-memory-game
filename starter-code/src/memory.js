var MemoryGame = function (cards) {
  this.cards = cards,
    this.pickedCards = [],
    this.pairsClicked = 0,
    this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  for (let i = this.cards.length - 1; i >= 0; i--) {
    let randomNum = Math.floor(Math.random() * (i + 1));
    let value = this.cards[randomNum];

    this.cards[randomNum] = this.cards[i];
    this.cards[i] = value;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  let result = (firstCard === secondCard);

  this.pairsClicked++;

  if (result) {
    this.pairsGuessed++;
  }

  return result;
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed == (this.cards.length / 2);
};