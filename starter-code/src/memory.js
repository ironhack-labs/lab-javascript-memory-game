


var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
  TouchList.pairsGuessed = []
};



// ----------------SHUFFLE CARDS ---------------------------

MemoryGame.prototype.shuffleCards = function () {
  var length = this.cards.length
  var randomIndex

  while (length > 0){
    randomIndexx = Math.floor(Math.random() * length--)
    card = this.cards.splice(randomIndex, 1)
    this.pickedCards.push(card)
    length -= 1
  
  }
};


// -----------------CHECK IF PAIR --------------------------

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard){
    return true
  }else{
    return false
  }

}


// -------------------- IS FINISHED --------------------------
MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === this.pickedCards){
    return true
  }else{
    return false
  }
};