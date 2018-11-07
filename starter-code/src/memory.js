var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
  var currentIndex = this.cards.length
  var tempValue
  var randomIndex
  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex --
  

  tempValue = this.cards[currentIndex]
  this.cards[currentIndex] = this.cards[randomIndex]
  this.cards[randomIndex] = tempValue
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++
  if(firstCard === secondCard){
    this.pairsGuessed ++
    return true
  }
  else return false
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === 0) return false
  if(this.pairsGuessed === this.cards.length/2) return true
  else return false
};