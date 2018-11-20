MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  

  if (firstCard === secondCard) {
    this.pairsGuessed++
    return true
  } else {
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
   if (this.pairsGuessed.length < (cards.length/2)) {
     return false
   } else if (this.pairsGuessed === (cards.length/2)) {
     return true
   } else {
     return false
   }
  }