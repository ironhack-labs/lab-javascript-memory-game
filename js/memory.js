class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards(cards) {

    if (this.cards == undefined) {
      return undefined
    } else {
      let shuffleArray = this.cards.sort((a, b) => 0.5 - Math.random())
      return shuffleArray
    }
  }

  checkIfPair(card1, card2) {
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0

    if (card1 === card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } if (card1 != card2) {
      this.pairsClicked++
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed != 12) {
      return false
    }
    if (this.pairsGuessed = 12) {
      return true
    }
  }
}


// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
