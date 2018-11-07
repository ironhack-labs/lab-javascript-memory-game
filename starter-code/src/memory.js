var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = pickedCards[]
  this.pairsClicked = pairsClicked[]
  this.pairsGuessed = pairsGuessed[]
};

MemoryGame.prototype.shuffleCards = function () {
  Math.floor(Math.random() * cards.length)
  return this.shuffleCards
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if(firstCard === secondCard){
    MemoryGame.pairsClicked.push(1)
    MemoryGame.pairsGuessed.push(1)
    console.log(true)
  } else{
    console.log(false)
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.cards.length / 2){
    console.log('you win')
  }else{
    console.log('keep playing')
  }
};

