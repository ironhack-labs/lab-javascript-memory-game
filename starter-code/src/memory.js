var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {



  var barajaSinBarajar = this.cards.length
  var temporaryValue
  var laSiguente

  while (barajaSinBarajar !== 0) {

    laSiguente = Math.floor(Math.random() * barajaSinBarajar);
    barajaSinBarajar -= 1;

    temporaryValue = this.cards[barajaSinBarajar];
    this.cards[barajaSinBarajar] = this.cards[laSiguente];
    this.cards[laSiguente] = temporaryValue;
  }

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1
  if (firstCard === secondCard) {
    this.pairsGuessed += 1
    return true
  } else {
    return false
  }
}



MemoryGame.prototype.isFinished = function() {
  return (this.pairsGuessed === this.cards.length / 2)
};