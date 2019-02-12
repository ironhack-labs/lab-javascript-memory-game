var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var counter = this.cards.length
  var aux, index

  while (counter>0){
    index = Math.floor(Math.random()*counter)
    counter--
    aux = this.cards[counter]
    this.cards[counter] = this.cards[index]
    this.cards[index] = aux
  }
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard===secondCard){
    this.pairsGuessed++
    return true
  } else {
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed===(this.cards.length/2)
}