var MemoryGame = function (cards) {
  this.cards = cards
  this.pickedCards = []
  this.pairsClicked = 0
  this.pairsGuessed = 0
};

MemoryGame.prototype.shuffleCards = function () {
let copyCards = this.cards
let container = []
while (copyCards.length > 0){
  let indexArreglo = Math.floor(Math.random()*copyCards.length)
  let extraction = copyCards.splice(indexArreglo,1)
container.push(extraction[0])
}
this.cards = container
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard){
    this.pairsClicked++
    this.pairsGuessed++
    return true
  } else {
    this.pairsClicked++
  }return false
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === (this.cards.length)/2){
    return true
  }else return false
};