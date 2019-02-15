var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var i, j, aux;
  for (i = this.cards.length - 1; i >= 0; i--) {
    j = Math.round( Math.random() * i );
    aux = this.cards[j];
    this.cards[j] = this.cards[i];
    this.cards[i] = aux;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  var pair = false;
  this.pairsClicked ++;
  if ( firstCard.localeCompare(secondCard) === 0 ) {
    this.pairsGuessed ++;
    pair = true;
  }
  return pair;
}

MemoryGame.prototype.isFinished = function () {
  var end = false;
  if ( this.pairsGuessed === 12 ) { end = true; } // DGG: El test se pasa con 8???
  return end;
};