
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClicked++
  if (firstCard === secondCard) {
    this.pairsGuessed++
  }
  return (firstCard === secondCard)
}

MemoryGame.prototype.isFinished = function () {
  return (this.pairsGuessed === this.cards.length / 2)
};