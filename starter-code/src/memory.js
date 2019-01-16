class MemoryGame {
  constructor (cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards (cards) {
    this.cards = cards.sort(() => 0.5 - Math.random())
  }
  checkIfPair (card1, card2) {
    this.pairsClicked++
    if (card1.name === card2.name) {
      this.pairsGuessed++
      this.pickedCards = []
      return true
    } else {
    setTimeout(function () {
    card1.reference.toggleClass('back front')
    card1.reference2.toggleClass('back front')
    card2.reference.toggleClass('back front')
    card2.reference2.toggleClass('back front') 
    return false
     },500)
     this.pickedCards = []
    }
  }
  isFinished () {
    if (this.pairsGuessed === this.cards.length / 2) {
    alert('You won! Your score is' + this.pairsClicked)  
    return true    
    } else {
      return false
    }
  }
}
// MemoryGame.prototype.shuffleCards = function () {

// };

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
// }

// MemoryGame.prototype.isFinished = function () {
// };